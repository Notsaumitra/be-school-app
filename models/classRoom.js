const mongoose = require("mongoose");
const attendanceSchema = require("./attendance");
const studentSchema = require("./student");

const classRoomSchema = new mongoose.Schema({
  className: { type: String, required: true },
  classId: { type: Number, required: true },
  students: [studentSchema],
  attendance: [attendanceSchema],
});

module.exports = mongoose.model("Classroom", classRoomSchema);
