const router = require("express").Router();
//CRUD
const { createStudent } = require("../controllers/student.controller.js");
//

router.get("/", (req, res) => {
  res.send("GET OK ^,_,^");
});

router.post("/", createStudent);

router.get("/:id", (req, res) => {
  res.send(`GET OK ^,_,^ :${req.params.id}`);
});

router.put("/:id", (req, res) => {
  res.send(`PUT OK ^,_,^ :${req.params.id}`);
});

module.exports = router;
