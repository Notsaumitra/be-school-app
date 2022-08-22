const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  date: { type: String, required: true },
  classId: {
    type: Number,
    required: true,
  },
  students: [
    {
      student_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true,
      },
      isPresent: { type: Boolean, default: false },
      isAbsent: { type: Boolean, default: false },
      isSick: { type: Boolean, default: false },
      isOnLeave: { type: Boolean, default: false },
    },
  ],
});

module.exports = mongoose.model("Attendance", attendanceSchema);
