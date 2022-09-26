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
    if (student) {
      res.status(201).json({
        success: true,
        student,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

const getStudent = async (req, res) => {
  try {
    const { id: _id } = req.params;
    console.log(req.params);
    const student = await Student.findOne({
      _id,
    });
    console.log(student);
    if (student) {
      res.status(200).json({
        success: true,
        student,
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
  }
};

module.exports = { postStudent, getStudent, getAllStudents };
