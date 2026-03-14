const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Permission = require("../../models/permission");
const Admin = require("../../models/admin"); // Adjust the path as necessary

/**
 * Middleware to check user permissions based on token and role
 * @param {String} moduleName - The name of the module (e.g., "Users", "Products")
 * @param {String} action - The action to check (e.g., "create", "read", "update", "delete")
 */
const checkPermissionWithRole = (moduleName, action) => {
  return async (req, res, next) => {
    try {
      // Extract token from headers
      const token = req.headers["authorization"];
      if (!token) {
        return res.status(401).json({ message: "No token provided." });
      }

      // Verify token and extract user info
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded; // Assuming the token contains user data, including _id and role

      const userId = req.user._id;
      const userRole = req.user.role;

      // Fetch user data from the database if needed
      const user = await Admin.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found." });
      }

      // If user is a superadmin, grant access to all pages and actions
      if (userRole === "superadmin") {
        return next();
      }

      // Find the permission record for the user and the specific module
      const permissionRecord = await Permission.findOne({
        userId: mongoose.Types.ObjectId(userId),
        name: moduleName,
      });

      if (!permissionRecord || !permissionRecord.permission[action]) {
        return res.status(403).json({ message: "Access denied. Insufficient permissions." });
      }

      // If permission exists and user is not a superadmin, proceed
      next();
    } catch (error) {
      console.error("Permission check error:", error);
      res.status(500).json({ message: "Internal server error." });
    }
  };
};

module.exports = checkPermissionWithRole;
