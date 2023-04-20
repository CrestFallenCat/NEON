import React from "react";
import { motion } from "framer-motion";

export function Comments() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      comments
    </motion.div>
  );
}

export default Comments;
