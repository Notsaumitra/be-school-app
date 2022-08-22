const express = require("express");
const router = express.Router();
const { register, login, googleSignIn } = require("../controllers/auth");

router.post("/register", register);

router.post("/login", login);

router.post("/googleSignIn", googleSignIn);

module.exports = router;
