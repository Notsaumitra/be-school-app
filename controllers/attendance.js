const Attendance = require("../models/attendance");
const Classroom = require("../models/classRoom");

const postAttendance = async (req, res, next) => {
  try {
    const { date, classId, students } = req.body;
    const attendance = new Attendance({
      date,
      classId: classId,
      students,
    });
    await attendance.save();
    console.log(attendance);
    res.status(201).json({
      success: true,
      attendance,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
    console.log(error);
  }
};

const getSingleAttendance = async (req, res, next) => {
  try {
    const { date, classId } = req.params;
    const findAttendance = await Attendance.findOne({ date, classId }).populate(
      "students.student_id"
    );
    console.log(findAttendance);

    if (findAttendance) {
      res.status(200).json({
        success: true,
        findAttendance,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Attendance not marked",
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

const getAttendanceForClass = async (req, res) => {
  try {
    const { classId } = req.params;
    const findAttendance = await Attendance.find({ classId }).populate(
      "students.student_id"
    );

    if (findAttendance.length > 0) {
      res.status(200).json({
        success: true,
        findAttendance,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Attendance not marked",
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

module.exports = { postAttendance, getSingleAttendance, getAttendanceForClass };
