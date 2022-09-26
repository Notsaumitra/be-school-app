const express = require("express");
const router = express.Router();
const {
  register,
  login,
  googleSignIn,
  getAllStaff,
} = require("../controllers/auth");

router.post("/register", register);

router.post("/login", login);

router.post("/googleSignIn", googleSignIn);

router.get("/allStaff", getAllStaff);

module.exports = router;
