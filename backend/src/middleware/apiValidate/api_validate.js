require('dotenv').config(); // Load environment variables

const authenticate = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];
  const apiSecret = req.headers["x-api-secret"];

  console.log("Received API Key:", apiKey);
  console.log("Received API Secret:", apiSecret);
  console.log("Expected API Key:", process.env["X-API-KEY"]);
  console.log("Expected API Secret:", process.env["X-API-SECRET"]);

  if (apiKey === process.env["X-API-KEY"] && apiSecret === process.env["X-API-SECRET"]) {
    next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = authenticate;
