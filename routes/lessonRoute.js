const express = require("express");
const router = express.Router();
const {
  postLesson,
  getLessonPerClass,
  getAllLessons,
  updateLesson,
} = require("../controllers/lesson");

router.get("/allLessons", getAllLessons);

router.get("/lesson/:classId", getLessonPerClass);

router.post("/lesson", postLesson);

router.put("/updateLesson", updateLesson);

module.exports = router;
