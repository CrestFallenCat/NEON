import React, { useState } from "react";

import { motion } from "framer-motion";
import "./GameCSS.css";
import birb from "./pics/birb.jpg";
import oldMan from "./pics/oldMan.png";
import froge from "./pics/Froge.jpg";
import sekiro from "./pics/sekiro.jpg";
import monster from "./pics/monster.jpg";
import kura from "./pics/kura.jpg";
import smert from "./pics/smert.JPG";
import planet from "./pics/planet.png";
import mood from "./pics/mood.jpg";
import synthship from "./pics/synthShip.png";

export function Game() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [counter, setCounter] = useState(0);

  const images = [
    birb,
    sekiro,
    smert,
    kura,
    planet,
    mood,
    synthship,
    monster,
    froge,
    oldMan,
  ];
  const handleHumanClick = () => {
    if (
      currentImage === birb ||
      currentImage === froge ||
      currentImage === monster ||
      currentImage === kura ||
      currentImage === mood
    ) {
      setCounter(counter + 1);
    }
    setCurrentIndex(currentIndex + 1);
  };
  const handleAiClick = () => {
    if (
      currentImage === sekiro ||
      currentImage === smert ||
      currentImage === planet ||
      currentImage === synthship ||
      currentImage === oldMan
    ) {
      setCounter(counter + 1);
    }
    setCurrentIndex(currentIndex + 1);
  };
  const currentImage = images[currentIndex];

  const handleResetClick = () => {
    setCounter(0);
    setCurrentIndex(0);
  };

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <h1>Ai or Human?</h1>
      <div className="buttons">
        <button onClick={handleHumanClick}>Human</button>
        <button onClick={handleAiClick}>AI</button>
        <button onClick={handleResetClick}>Reset</button>
      </div>
      <div className="counter-container">
        <p id="counter"> {counter}/10 Correct</p>
      </div>
      <div className="the-images">
        <img
          className={
            currentImage === oldMan ||
            currentImage === sekiro ||
            currentImage === smert ||
            currentImage === planet ||
            currentImage === synthship
              ? "machine"
              : "human"
          }
          src={currentImage}
          alt="current"
        ></img>
      </div>
    </motion.div>
  );
}

export default Game;
