const { Router } = require("express");

router = Router();

router.get("/", (req, res) => {
  res.send("Hello world Alura");
});

module.exports = router;
