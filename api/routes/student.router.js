const router = require("express").Router();
//CRUD
const {
  createStudent,
  getStudent,
  getAllStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/student.controller.js");
//

router.get("/", getAllStudent);

router.post("/", createStudent);

router.get("/:id", getStudent);

router.put("/:id", updateStudent);

router.delete("/:id", deleteStudent);

module.exports = router;
