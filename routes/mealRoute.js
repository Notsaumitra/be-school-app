const express = require("express");
const router = express.Router();
const {
  postMeal,
  getSingleMeal,
  getMealsForClass,
  updateMeal,
  getAllMealsForStudent,
} = require("../controllers/meal");

router.post("/meal", postMeal);

router.get("/meal/:studentId/:date", getSingleMeal);

router.get("/meals/:studentId", getAllMealsForStudent);

router.get("/meals/:classId/:date", getMealsForClass);

router.put("/updateMeal", updateMeal);

module.exports = router;
