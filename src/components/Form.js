import React, { useState } from "react";

function CommentForm() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    // e.g., send data to a server, update state, etc.
    console.log("Name:", name);
    console.log("Comment:", comment);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={handleNameChange}
        required
      />

      <label htmlFor="comment">Comment:</label>
      <textarea
        id="comment"
        name="comment"
        value={comment}
        onChange={handleCommentChange}
        rows="4"
        required
      ></textarea>

      <input type="submit" value="Submit" />
    </form>
  );
}

export default CommentForm;
