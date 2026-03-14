const express = require("express");
const router = express.Router();

router.use("/auth", require("../controller/admin"));


module.exports = router;
