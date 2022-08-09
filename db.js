const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://sma-be:m0QwyN7FJiCH5JDq@cluster0.vauwxau.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("MongoDB connection successful");
  })
  .catch((err) => {
    console.log(err);
    console.log("failed");
  });
