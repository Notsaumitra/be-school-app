const Classroom = require("../models/classRoom");

const addClass = async (req, res, next) => {
  try {
    const { classId, className } = req.body;
    students = [];
    const newClass = new Classroom({
      classId,
      className,
      students,
    });
    await newClass.save();
    res.status(201).json({
      success: true,
      newClass,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
    console.log(err);
  }
};

const getAllClasses = async (req, res, next) => {
  try {
    const allClasses = await Classroom.find({});
    res.status(201).json({
      success: true,
      data: allClasses,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
    console.log(err);
  }
};

const getClass = async (req, res, next) => {
  try {
    console.log(req.params);
    const classRoom = await Classroom.findOne({
      classId: +req.params.id,
    }).populate("students");
    if (classRoom) {
      res.status(201).json({
        success: true,
        data: classRoom,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Does not exist",
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

const updateClass = async (req, res, next) => {
  try {
    const { classId, studentId } = req.body;
    const updatedClass = await Classroom.updateOne(
      { classId },
      { $push: { students: studentId } }
    );
    res.status(200).json({
      success: true,
      updatedClass,
    });
    console.log(updatedClass);
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
    console.log(err);
  }
};
module.exports = { getClass, getAllClasses, addClass, updateClass };
