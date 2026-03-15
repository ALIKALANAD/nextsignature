const exprss = require("express");
const router = exprss.Router();
const userController = require("../controller/web/auth.controller");


router.post("/signup",  userController.Signup);
router.post("/signin", userController.Signin);
router.post("/signout", userController.Signout);

module.exports = router;
