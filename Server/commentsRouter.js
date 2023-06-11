const express = require("express");
const router = express.Router();
const comments = require("./database");

// get all
router.get("/", async (req, res) => {
  try {
    const allComments = await comments.find();
    res.json(allComments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// get one
router.get("/:id", (req, res) => {
  // Retrieve a single comment by ID
  const commentId = req.params.id;
  // Retrieve the comment from the database or any other source

  res.send({ comment: "bla bla" }); // Replace with the actual comment data
});

router.post("/", (req, res) => {
  const { name, comment } = req.body;

  // Process the comment data here (e.g., save it to a database)

  res.send({ success: true });
});

router.patch("/:id", (req, res) => {
  // Update a comment by ID
  const commentId = req.params.id;
  // Update the comment in the database or any other source

  res.send({ success: true });
});

router.delete("/:id", (req, res) => {
  // Delete a comment by ID
  const commentId = req.params.id;
  // Delete the comment from the database or any other source

  res.send({ success: true });
});

module.exports = router;
