const Student = require("../models/student");
const Classroom = require("../models/classRoom");

const postStudent = async (req, res, next) => {
  try {
    const { firstName, lastName, studentId, classId } = req.body;
    const student = new Student({
      firstName,
      lastName,
      studentId,
      classId,
    });

    await student.save();
    res.status(201).json({
      success: true,
      student,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
    console.log(err);
  }
};

const getStudent = async (req, res, next) => {
  try {
    const { studentId } = req.body;
    const student = await Student.findOne({
      studentId,
    });
    console.log(student);
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
    console.log(err);
  }
};

const getAllStudents = async (req, res) => {
  try {
    const { token } = req.body;
    const googleSignInData = jwt.verify(token);
    console.log(token);
    console.log(googleSignInData);
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
    console.log(err);
  }
};

module.exports = { postStudent, getStudent, getAllStudents };
