const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  classId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Classroom",
    required: true,
  },
  meals: [
    {
      type: Date,
      mealId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Meal",
        required: true,
      },
      isChanged: {
        type: Boolean,
        default: false,
      },
    },
  ],
});

module.exports = mongoose.model("Student", studentSchema);
