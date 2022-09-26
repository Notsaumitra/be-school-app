const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const register = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password, role, roleId } = req.body;
    const user = new User({
      firstName,
      lastName,
      email,
      password,
      role,
      roleId,
    });

    // gensalt receives rounds that a password needs to be processed-- default 10 and return a promise
    const salt = await bcrypt.genSalt();
    // we hash the password before saving to the db
    user.password = await bcrypt.hash(user.password, salt);

    const resp = await user.save();
    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    res.status(201).json({
      success: true,
      token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      email,
    }).select("+password");

    if (user) {
      const validPassword = await bcrypt.compare(password, user.password);
      if (validPassword) {
        const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
          expiresIn: process.env.JWT_EXPIRES_IN,
        });
        res.status(200).json({
          success: true,
          token,
        });
      } else {
        res.status(401).json({
          success: false,
          message: "Invalid Credentials",
        });
      }
    } else {
      res.status(404).json({
        success: false,
        message: "User Not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

const googleSignIn = async (req, res) => {
  try {
    const { token } = req.body;
    const googleSignInData = jwt.verify(token);
    console.log(token);
    console.log(googleSignInData);
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

const getAllStaff = async (req, res) => {
  try {
    const staffData = await User.find({ roleId: 101 });
    res.status(200).json({
      success: true,
      staffData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
    console.log(error);
  }
};

module.exports = { register, login, googleSignIn, getAllStaff };
