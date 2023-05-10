import React, { useState, useEffect } from "react";
import Confetti from "./Confetti";
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

import human from "./pics/humanButton.png";
import ai from "./pics/aiButton.png";
import reset from "./pics/resetButton.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

export function Game() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [counter, setCounter] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [option, setOption] = useState("");
  const [showTick, setShowTick] = useState(false);
  const [showCross, setShowCross] = useState(false);

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
    setOption("human");
    checkAnswer("human");
    setCurrentIndex(currentIndex + 1);
  };

  const handleAiClick = () => {
    setOption("ai");
    checkAnswer("ai");
    setCurrentIndex(currentIndex + 1);
  };

  const checkAnswer = (selectedOption) => {
    if (selectedOption === "human") {
      if (
        currentImage === birb ||
        currentImage === froge ||
        currentImage === monster ||
        currentImage === kura ||
        currentImage === mood
      ) {
        setShowTick(true);
      } else {
        setShowCross(true);
      }
    } else if (selectedOption === "ai") {
      if (
        currentImage === sekiro ||
        currentImage === smert ||
        currentImage === planet ||
        currentImage === synthship ||
        currentImage === oldMan
      ) {
        setShowTick(true);
      } else {
        setShowCross(true);
      }
    }

    // Hide the tick and cross after 1 second
    setTimeout(() => {
      setShowTick(false);
      setShowCross(false);
    }, 1000);
  };

  const currentImage = images[currentIndex];

  const handleResetClick = () => {
    setCounter(0);
    setCurrentIndex(0);
    setOption("");
  };

  useEffect(() => {
    if (currentIndex >= images.length) {
      setShowConfetti(true);
    } else {
      setShowConfetti(false);
    }
  }, [currentIndex, images.length]);

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <h1 id="title">Ai or Human?</h1>
      <div className="counter-container">
        <p id="counter"> {counter}/10 Correct</p>
      </div>
      <div className="the-images">
        <div className="the-icons">
          {showTick && <FontAwesomeIcon icon={faCheck} className="tick" />}
          {showCross && <FontAwesomeIcon icon={faXmark} className="cross" />}
        </div>

        {currentIndex < images.length ? (
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
          />
        ) : (
          <div style={{ width: "100%", height: "1px" }} />
        )}
      </div>
      <div className="buttons">
        <img
          src={human}
          id="humanButton"
          onClick={handleHumanClick}
          style={{
            visibility: currentIndex < images.length ? "visible" : "hidden",
          }}
        ></img>

        <img
          src={reset}
          id="resetButton"
          onClick={handleResetClick}
          style={{
            visibility: currentIndex >= images.length ? "visible" : "hidden",
          }}
        ></img>

        <img
          src={ai}
          id="aiButton"
          onClick={handleAiClick}
          style={{
            visibility: currentIndex < images.length ? "visible" : "hidden",
          }}
        ></img>
      </div>
      {/* confetti falls down when after the last images has been shown and the game is over */}
      {showConfetti && <Confetti />}
    </motion.div>
  );
}

export default Game;
