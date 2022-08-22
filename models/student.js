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
  // meals: [
  //   mealsSchema,
  // {
  //   type: Date,
  //   mealId: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Meal",
  //     required: true,
  //   },
  //   isChanged: {
  //     type: Boolean,
  //     default: false,
  //   },
  // },
  // ],
});

module.exports = mongoose.model("Student", studentSchema);
