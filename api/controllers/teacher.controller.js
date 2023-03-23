const { Teacher } = require("../models/teacher.model");

const createTeacher = async (req, res) => {
  try {
    const result = await Teacher.create(req.body);

    res.status(200).json({
      message: "POST OK ^,_,^",
      teacher: result,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const getTeacher = async (req, res) => {
  try {
    const result = await Teacher.findAll(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!result) {
      res.status(404).send("Teacher not found");
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAllTeacher = async (req, res) => {
  try {
    const result = await Teacher.findAll();
    if (!result) {
      res.status(404).send("Teachers not found");
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateTeacher = async (req, res) => {
  try {
    const result = await Teacher.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!result) {
      res.status(404).send("Teacher not found");
    }
    res.status(200).send("Teacher Updated");
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteTeacher = async (req, res) => {
  try {
    const result = await Teacher.destroy(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!result) {
      res.status(404).send("Teacher not found");
    }
    res.status(200).send("Teacher Deleted!");
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  createTeacher,
  getTeacher,
  getAllTeacher,
  updateTeacher,
  deleteTeacher,
};
