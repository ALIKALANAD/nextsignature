const mongoose = require("mongoose");

// create a superAdmin admin user models auth

const authSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  googleId: {
    type: String,
  },
  facebookId: {
    type: String,
  },
  avatar: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
    default: "USER",
    enum: ["SUPER_ADMIN", "ADMIN", "USER"],
  },
  create: {
    type: Date,
    default: Date.now(),
  },
  resetPasswordToken: {
    token: String,
    expire: Date,
  },

  update: Date,
});

const Admin = mongoose.model("admin", authSchema);

module.exports = Admin;
