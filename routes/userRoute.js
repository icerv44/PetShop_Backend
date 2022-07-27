const express = require("express");
const userController = require("../controllers/userController");
const authenticate = require("../middlewares/authenticate");
const router = express.Router();

router.get("/me", userController.getMe);

module.exports = router;
