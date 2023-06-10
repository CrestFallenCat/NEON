const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    {
      name: "poopin",
      comment: "woah this is a comment",
    },
    {
      name: "nolife",
      comment: "This is also a comment",
    },
  ]);
});

module.exports = router;
