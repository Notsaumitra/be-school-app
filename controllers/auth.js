const User = require("../models/user");
const jwt = require("jsonwebtoken");

const register = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const user = new User({
      firstName,
      lastName,
      email,
      password,
    });

    await user.save();
    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
    console.log(err);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      email,
    }).select("+password");

    console.log(user);
    console.log(password);
    if (user.password === password) {
      res.status(200).json({
        success: true,
        token: "testJWT",
      });
    } else {
      res.status(404).json({
        success: false,
        error: "Invalid Credentials",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
    console.log(err);
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
    console.log(err);
  }
};

module.exports = { register, login, googleSignIn };
