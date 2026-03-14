require("dotenv").config();

const app = require("./app");
const connectDB = require("./config/database");

const PORT = process.env.SERVER_PORT || 5500;

(async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });

  } catch (error) {
    console.error("❌ Server start error:", error);
  }
})();