const { Classroom } = require("../models/Classroom.model");

const createClassroom = async (req, res) => {
  try {
    const result = await Classroom.create(req.body);

    res.status(200).json({
      message: "POST OK ^,_,^",
      classroom: result,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const getClassroom = async (req, res) => {
  try {
    const result = await Classroom.findAll(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!result) {
      res.status(404).send("Classroom not found");
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAllClassroom = async (req, res) => {
  try {
    const result = await Classroom.findAll();
    if (!result) {
      res.status(404).send("Classrooms not found");
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateClassroom = async (req, res) => {
  try {
    const result = await Classroom.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!result) {
      res.status(404).send("Classroom not found");
    }
    res.status(200).send("Classroom Updated");
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteClassroom = async (req, res) => {
  try {
    const result = await Classroom.destroy(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!result) {
      res.status(404).send("Classroom not found");
    }
    res.status(200).send("Classroom Deleted!");
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  createClassroom,
  getClassroom,
  getAllClassroom,
  updateClassroom,
  deleteClassroom,
};
