const register = (req, res, next) => {
  res.send("Register Route");
};

const login = (req, res, next) => {
  res.send("login Route");
};

const forgotPassword = (req, res, next) => {
  res.send("forgotPassword Route");
};

const resetPassword = (req, res, next) => {
  res.send("resetPassword Route");
};

module.exports = register;
