const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: {
    type: String,
    required: [true, "Email already registered"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minLength: 6,
    select: false,
  },
  role: { type: String, required: true },
  roleId: { type: Number, required: true },
});

// __v gets added automatically (it shows how many times document has been updated)

module.exports = mongoose.model("User", userSchema);
