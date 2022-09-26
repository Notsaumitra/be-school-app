const Lesson = require("../models/lessonPlan");

const postLesson = async (req, res) => {
  try {
    const { days, classId } = req.body;
    const lesson = new Lesson({
      days,
      classId,
    });
    console.log(lesson);
    await lesson.save();
    if (lesson) {
      res.status(201).json({
        success: true,
        lesson,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

const updateLesson = async (req, res) => {
  try {
    const { days, classId } = req.body;
    const updatedLesson = await Lesson.updateOne(
      {
        classId,
      },
      { $set: { days } }
    );

    if (updateLesson) {
      res.status(201).json({
        success: true,
        updateLesson,
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
  }
};

const getLessonPerClass = async (req, res) => {
  try {
    const { classId } = req.params;
    const singleLessonPlan = await Lesson.findOne({
      classId,
    }).populate("days.timeSlot.taughtBy");
    if (singleLessonPlan) {
      res.status(200).json({
        success: true,
        singleLessonPlan,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Not Found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

const getAllLessons = async (req, res) => {
  try {
    const allLessonPlans = await Lesson.find({});
    if (allLessonPlans) {
      res.status(200).json({
        success: true,
        allLessonPlans,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Not Found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

module.exports = { postLesson, getLessonPerClass, getAllLessons, updateLesson };
