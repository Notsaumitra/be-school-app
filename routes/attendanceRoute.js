const express = require("express");
const router = express.Router();
const {
  postAttendance,
  getAttendanceForClass,
  getSingleAttendance,
} = require("../controllers/attendance");

router.post("/attendance", postAttendance);

router.get("/attendance/:classId/:date", getSingleAttendance);

router.get("/allAttendance/:classId", getAttendanceForClass);

module.exports = router;
