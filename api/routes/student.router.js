const router = require("express").Router();
//CRUD
const {
  createStudent,
  getStudent,
  getAllStudent,
  updateStudent,
  deleteStudent,
  addContactInfo,
  createAndSetContact,
} = require("../controllers/student.controller.js");
//
//C
router.post("/", createStudent);
router.post("/:id/contact", addContactInfo);
router.post("/:id/contact/create", createAndSetContact);

//R
router.get("/", getAllStudent);
router.get("/:id", getStudent);

//U
router.put("/:id", updateStudent);

//D
router.delete("/:id", deleteStudent);

module.exports = router;
