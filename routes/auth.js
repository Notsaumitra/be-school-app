const express = require("express");
const router = express.Router();
const register = require("../controllers/auth");

router.post("/register", (req, res) => {
  register;
});

router.get("/", register, (req, res) => {
  res.send("working");
});

module.exports = router;
