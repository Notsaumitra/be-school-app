const express = require("express");
const router = express.Router();
const {
  getClass,
  getAllClasses,
  addClass,
  updateClass,
} = require("../controllers/classRoom");

router.get("/classRoom", getAllClasses);

router.get("/classRoom/:id", getClass);

router.post("/classRoom", addClass);

router.put("/classRoom/:id", updateClass);

module.exports = router;
