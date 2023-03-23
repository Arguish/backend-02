const router = require("express").Router();
//

router.use("/student", require("./student.router"));
router.use("/teacher", require("./teacher.router"));
router.use("/contact", require("./contact.router"));
router.use("/classroom", require("./classroom.router"));

router.get("/", (req, res) => {
  res.send("REQ OK ^,_,^");
});

module.exports = router;
