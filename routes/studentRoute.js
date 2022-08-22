const express = require("express");
const router = express.Router();
const {
  postStudent,
  getStudent,
  getAllStudents,
} = require("../controllers/student");

router.get("/students", getStudent);

router.get("/student/:id", getAllStudents);

router.post("/student", postStudent);

module.exports = router;
