// dotenv must be at the top to load environment variables
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const db = require("./db");
app.use(express.json());
// app.use(express.urlencoded());

app.use("/api/auth", require("./routes/auth"));
// app.use(logger); //middleware

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("running");
});

app.listen(PORT, () => {
  console.log(`app running at ${PORT}`);
});

function logger(req, res, next) {
  console.log("middleware");
  next();
}
