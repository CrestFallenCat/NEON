import React from "react";
import { motion } from "framer-motion";
import "./CommentsCSS.css";
import Form from "./Form.js";

export function Comments() {
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
      <Form />
    </motion.div>
  );
}

export default Comments;
