const mongoose = require("mongoose");
const attendanceSchema = require("./attendance").schema;
const studentSchema = require("./student").schema;

const classRoomSchema = new mongoose.Schema({
  className: { type: String, required: true },
  classId: { type: Number, required: true },
  students: [{ type: "ObjectId", ref: "Student" }],
});

module.exports = mongoose.model("Classroom", classRoomSchema);
