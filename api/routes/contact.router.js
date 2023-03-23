const router = require("express").Router();
//CRUD
const {
  createContact,
  getContact,
  getAllContact,
  updateContact,
  deleteContact,
} = require("../controllers/contact.controller.js");
//

router.get("/", getAllContact);

router.post("/", createContact);

router.get("/:id", getContact);

router.put("/:id", updateContact);

router.delete("/:id", deleteContact);

module.exports = router;
