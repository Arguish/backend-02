const { Student } = require("../models/student.model");

const createStudent = async (req, res) => {
  try {
    const result = await Student.create(req.body);

    res.status(200).json({
      message: "POST OK ^,_,^",
      student: result,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const getStudent = async (req, res) => {
  try {
    const result = await Student.findAll(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!result) {
      res.status(404).send("Student not found");
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAllStudent = async (req, res) => {
  try {
    const result = await Student.findAll();
    if (!result) {
      res.status(404).send("Students not found");
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateStudent = async (req, res) => {
  try {
    const result = await Student.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!result) {
      res.status(404).send("Student not found");
    }
    res.status(200).send("Student Updated");
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteStudent = async (req, res) => {
  try {
    const result = await Student.destroy(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!result) {
      res.status(404).send("Student not found");
    }
    res.status(200).send("Student Deleted!");
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  createStudent,
  getStudent,
  getAllStudent,
  updateStudent,
  deleteStudent,
};
