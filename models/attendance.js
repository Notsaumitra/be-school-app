const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now() },
  classId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Classroom",
    required: true,
  },
  students: [
    {
      studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
      },
      isPresent: { type: Boolean, default: false },
      isAbsent: { type: Boolean, default: false },
      isSick: { type: Boolean, default: false },
      isOnLeave: { type: Boolean, default: false },
    },
  ],
});

module.exports = mongoose.model("Attendance", attendanceSchema);
