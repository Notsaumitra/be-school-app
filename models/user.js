const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true, minLength: 6, select: false },
  role: { type: String },
  roleId: { type: Number },
});

// __v gets added automatically (it shows how many times document has been updated)

module.exports = mongoose.model("User", userSchema);
