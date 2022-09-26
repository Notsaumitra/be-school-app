const express = require("express");
const router = express.Router();
const {
  postStudent,
  getStudent,
  getAllStudents,
} = require("../controllers/student");

router.get("/students", getAllStudents);

router.get("/student/:id", getStudent);

router.post("/student", postStudent);

module.exports = router;
