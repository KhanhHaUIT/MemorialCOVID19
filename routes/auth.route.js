const express = require("express");
const router = express.Router();

const verifyToken = require("../middlewares/auth");
const AuthController = require("../controllers/Auth.controller");

router.get(

    "/", verifyToken, AuthController.auth);

router.post("/register", AuthController.register);

router.post("/login", AuthController.login);

router.patch('/change-password', verifyToken, AuthController.changePassword);

module.exports = router;
