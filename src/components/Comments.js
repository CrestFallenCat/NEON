import { React, useState } from "react";
import { motion } from "framer-motion";
import "./CommentsCSS.css";
import Form from "./Form.js";
import EditComment from "./EditComment";
import DeleteComment from "./DeleteComment";

export function Comments() {
  const [comments, setComments] = useState([]);

  const handleFormSubmit = (name, comment) => {
    const newComment = {
      name,
      comment,
    };

    setComments([...comments, newComment]);
    console.log(newComment);
  };

  const handleDeleteComment = (commentIndex) => {
    setComments((prevComments) => {
      const updatedComments = [...prevComments];
      updatedComments.splice(commentIndex, 1);
      return updatedComments;
    });
  };

  const handleEditComment = (index, newComment) => {
    setComments((prevComments) => {
      const updatedComments = [...prevComments];
      updatedComments[index].comment = newComment;
      return updatedComments;
    });
  };

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <h1 id="title"> Have an opinion? </h1>
      <div>
        <p>
          I hold a personal perspective that embraces the presence of our
          newfound artistic AI overlords, recognizing their enduring
          significance regardless of the potential outcomes. Although art
          remains a cherished pastime for me, I acknowledge that my sentiment
          might differ if I were a professional illustrator.
        </p>
        <p>Im sure you reckon something. Have at it</p>
      </div>
      <Form onFormSubmit={handleFormSubmit} />
      {comments.map((comment, index) => (
        <div className="comment-box" key={index}>
          <p>Name: {comment.name}</p>
          <div className="comments">
            <p>Comment: {comment.comment}</p>
          </div>
          <EditComment
            comment={comment}
            onSave={(newComment) => handleEditComment(index, newComment)}
          />
          <DeleteComment
            comment={comment}
            onDelete={() => handleDeleteComment(index)}
          />
        </div>
      ))}
    </motion.div>
  );
}

export default Comments;
