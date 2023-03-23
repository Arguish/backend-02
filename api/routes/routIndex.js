const router = require("express").Router();
//

router.use("/student", require("./student.router"));

router.get("/", (req, res) => {
  res.send("REQ OK ^,_,^");
});

module.exports = router;
