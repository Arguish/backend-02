const { Student } = require("../models/student.model");

const createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);

    res.status(200).json({
      message: "POST OK ^,_,^",
      student: student,
    });
  } catch (error) {
    throw error;
  }
};

module.exports = { createStudent };
