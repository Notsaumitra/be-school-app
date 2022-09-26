const Meal = require("../models/meal");

const postMeal = async (req, res, next) => {
  try {
    console.log(req.body);
    const { mealId, date, student_id, classId } = req.body;

    const newMeal = new Meal({
      mealId,
      date,
      classId,
      student_id,
    });
    await newMeal.save();
    console.log(newMeal);
    res.status(201).json({
      success: true,
      newMeal,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
    console.log(error);
  }
};

const getSingleMeal = async (req, res, next) => {
  try {
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
    console.log(error);
  }
};

const getMealsForClass = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
    console.log(error);
  }
};

const updateMeal = async (req, res) => {
  try {
    const { mealId, date, student_id, classId } = req.body;
    const updatedMeal = await Meal.updateOne(
      { student_id, date },
      { $set: { mealId, isChanged: true } }
    );
    console.log(updatedMeal);
    if (updatedMeal) {
      res.status(200).json({
        success: true,
        updatedMeal,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
    console.log(error);
  }
};

const getAllMealsForStudent = async (req, res) => {
  try {
    const { studentId: student_id } = req.params;
    const mealData = await Meal.find({ student_id }).populate("student_id");
    res.status(200).json({
      success: true,
      mealData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
    console.log(error);
  }
};

module.exports = {
  postMeal,
  getSingleMeal,
  getMealsForClass,
  updateMeal,
  getAllMealsForStudent,
};
