// dotenv must be at the top to load environment variables
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./config/db");

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded());

app.use("/auth", require("./routes/auth"));
app.use("/cls", require("./routes/classRoute"));
app.use("/stu", require("./routes/studentRoute"));
app.use("/atd", require("./routes/attendanceRoute"));
app.use("/mls", require("./routes/mealRoute"));
app.use("/les", require("./routes/lessonRoute"));

// app.use(logger); //middleware

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("running");
});

const server = app.listen(PORT, () => {
  console.log(`app running at ${PORT}`);
});

function logger(req, res, next) {
  console.log("middleware");
  next();
}

// show only error after crash
process.on("unhandledRejection", (err) => {
  console.log(err);
  server.close(() => process.exit(1));
});
