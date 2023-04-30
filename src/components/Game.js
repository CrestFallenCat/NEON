import React from "react";
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
        <img className="human" src={birb}></img>
        <img className="machine" src={sekiro}></img>
        <img className="machine" src={smert}></img>
        <img className="human" src={kura}></img>
        <img className="machine" src={planet}></img>
        <img className="human" src={mood}></img>
        <img className="machine" src={synthship}></img>
        <img className="human" src={monster}></img>
        <img className="human" src={froge}></img>
        <img className="machine" src={oldMan}></img>
      </div>
    </motion.div>
  );
}

export default Game;
