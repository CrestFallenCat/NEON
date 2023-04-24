// import React from "react";
import "./HomeCSS.css";
// import shipwreck from "./pics/ship.png";
// import synthwave from "./pics/synth.png";
// import sea from "./pics/seapng.png";
// import spaceship from "./pics/creation.png";
import mid from "./pics/mid.png";
import open from "./pics/openai.png";
// import clown from "./pics/clownl.png";
// import sunset from "./pics/sunset.png";
// import towers from "./pics/towers.png";
// import ball from "./pics/ball.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

import CarouselPics from "./CarouselPics";

export function Home() {
  let navigate = useNavigate();

  // const [showQuote, setShowQuote] = useState(true);

  // useEffect(() => {
  //   // const quoteShown = sessionStorage.getItem("quoteShown");
  //   // if (!quoteShown) {
  //   const timeout = setTimeout(() => {
  //     setShowQuote(true);
  //     // sessionStorage.setItem("quoteShown", "true");
  //     setTimeout(() => {
  //       setShowQuote(false);
  //     }, 6000); // fade out after 3 seconds
  //   }, 2000); // fade in after 1 second
  //   return () => clearTimeout(timeout);
  // }, []);
  return (
    <motion.div
      className="home"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      {/* <div className="splash">
        {showQuote && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
            // transition={{ duration: 0.8 }}
          >
            By far, the greatest danger of Artificial Intelligence is that
            people conclude too early that they understand it. -Eliezer
            Yudkowsky
          </motion.p>
        )}
      </div> */}
      {/* <div
        className="afterSplash"
        style={{ display: showQuote ? "none" : "block" }}
      > */}
      <div className="intro">
        <h1>What is meant by AI art?</h1>
        <p>
          AI or artificial intelligence has become increasingly powerful over
          the years with no sings of its immense capabilities slowing down. Its
          been better than us at maths, at logic games like chess for many years
          already. One domain previously unaffected by such things is the
          creative world.
        </p>
        <p>
          Art, design, illustration have always been the product of very real
          very human minds. Something that sets us apart as a species. Our
          ability to express emotion though these mediums is found nowhere else,
          until now.
        </p>
        <p>
          Algorithms trained on huge amounts of data can now be used to create a
          completely original piece of artwork, just from a short prompt written
          by a human. It will produce this for you in a matter of seconds{" "}
          <strong>and</strong> it will be stunning.
        </p>
      </div>
      <div className="softwareGrid">
        <h2 id="softwareTitle">The software</h2>
        <p id="opis">
          There are a number of companies that have created these art generating
          programs some are more powerful than others.Some of the big players
          are Midjourney and Open Ai's DAll-E 2 but there are many less
          sophisticated programs.
        </p>
        <div className="mid">
          <img
            src={mid}
            id="mid"
            alt="neon turquoise outline of a ship, the midJourney logo"
          ></img>
          <p id="midP">
            MidJourney, an AI program from San Francisco. Uses Discord to host
            its service, users craft their prompt and use bot commands to create
            a series of four unique images. The first 25 images are free but
            then you gotta pay up.
          </p>
        </div>
        <div className="open">
          <img src={open} id="open" alt="open AI symbol"></img>
          <p id="openP">
            DALL-E 2 is an AI program by openAI, the creators of chatGPT. The
            website offers users a small amounts of free credits every month to
            create their images, after that you will need to give them your
            money.
          </p>
        </div>
      </div>
      <div className="carousel-container">
        <CarouselPics />
      </div>

      <p className="about-images">
        I found myself getting lost in the creation of these various images, the
        speed and quality of the art produced cant really be denied. Isn't art
        something more than just the 'look'? no actual feeling or emotion played
        any role in creating these, there is something very detached and
        clinical about it.. but does that matter?
      </p>

      <p>
        I present to you, a game, can you tell the difference between art
        created by a computer or by me, a real life human?
        <button
          onClick={() => {
            navigate("/Game");
          }}
        >
          Click to play!
        </button>
      </p>
    </motion.div>
  );
}

export default Home;
