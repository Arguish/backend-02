const router = require("express").Router();
//CRUD
const {
  createTeacher,
  getTeacher,
  getAllTeacher,
  updateTeacher,
  deleteTeacher,
} = require("../controllers/teacher.controller.js");
//

router.get("/", getAllTeacher);

router.post("/", createTeacher);

router.get("/:id", getTeacher);

router.put("/:id", updateTeacher);

router.delete("/:id", deleteTeacher);

module.exports = router;
