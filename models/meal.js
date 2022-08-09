const mongoose = require("mongoose");
const studentSchema = require("./student");

const mealSchema = new mongoose.Schema({
  mealName: { type: String, required: true },
  mealId: { type: String, required: true },
  imageUrl: { type: String, default: "some url" },
  optedBy: [studentSchema],
});

module.exports = mongoose.model("Meal", mealSchema);
