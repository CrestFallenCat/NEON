import React from "react";
import { motion } from "framer-motion";

export function Game() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      hi
    </motion.div>
  );
}

export default Game;
