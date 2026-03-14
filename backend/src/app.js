require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: false, limit: "10mb" }));

// static folder
app.use("/uploads", express.static("uploads"));


// test route
app.get("/", (req, res) => {
  res.json({
    message: `You are using ECOMMERCE Service! PORT:${process.env.SERVER_PORT}`,
  });
});


// routes
app.use(
  `/api/${process.env.VERSION}/user/auth`,
  require("./routes/user.routes")
);


module.exports = app;