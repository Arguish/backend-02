const router = require("express").Router();
//

router.get("/", (req, res) => {
  res.send("GET OK ^,_,^");
});

router.post("/", (req, res) => {
  res.send("POST OK ^,_,^");
});

module.exports = router;
