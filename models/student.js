const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  studentId: {
    type: Number,
    required: true,
  },
  classId: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Student", studentSchema);
