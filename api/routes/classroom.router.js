const router = require("express").Router();
//CRUD
const {
  createClassroom,
  getClassroom,
  getAllClassroom,
  updateClassroom,
  deleteClassroom,
} = require("../controllers/classroom.controller.js");
//

router.get("/", getAllClassroom);

router.post("/", createClassroom);

router.get("/:id", getClassroom);

router.put("/:id", updateClassroom);

router.delete("/:id", deleteClassroom);

module.exports = router;
