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

// const images = [
//   { src: birb, isAi: false },
//   { src: oldMan, isAi: true },
//   { src: froge, isAi: false },
//   { src: sekiro, isAi: true },
//   { src: monster, isAi: false },
//   { src: kura, isAi: false },
//   { src: smert, isAi: true },
//   { src: planet, isAi: true },
//   { src: mood, isAi: false },
//   { src: synthship, isAi: true },
// ];

export function Game() {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const currentImage = images[currentIndex];

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <h1>Ai or Human?</h1>
      <div className="buttons">
        <button>Human</button>
        <button>AI</button>
        <button>Reset</button>
      </div>
      <div className="counter-container">
        <p id="counter"> /10 Correct</p>
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
