const express = require("express");
const authController = require("../controllers/authController");
const router = express.Router();

router.post("/userSignup", authController.signup);

router.post("/userLogin", authController.login);

router.post("/distributorSignup", authController.signupDistributor);

router.post("/distributorLogin", authController.loginDistributor);
module.exports = router;
