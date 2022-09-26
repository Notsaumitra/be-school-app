const mongoose = require("mongoose");
const studentSchema = require("./student").schema;

const mealSchema = new mongoose.Schema({
  mealId: { type: Number, required: true },
  isChanged: { type: Boolean, default: false },
  date: {
    type: String,
    required: true,
  },
  student_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  classId: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Meal", mealSchema);
