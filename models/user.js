const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true, minLength: 6 },
  role: { type: String, required: true },
  roleId: { type: Number, required: true },
});

module.exports = mongoose.model("User", userSchema);
