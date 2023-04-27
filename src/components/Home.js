import React, { useState } from "react";
import "./HomeCSS.css";

import mid from "./pics/mid.png";
import open from "./pics/openai.png";

import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import CarouselPics from "./CarouselPics";

export function Home() {
  const [showCarousel, setShowCarousel] = useState(false);
  const navigate = useNavigate();

  const handleAnimationComplete = () => {
    setShowCarousel(true);
  };

  return (
    <AnimatePresence mode="wait" onExitComplete={() => setShowCarousel(false)}>
      <motion.div
        key="home"
        className="home"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
        onExitComplete={() => setShowCarousel(false)}
        onAnimationComplete={handleAnimationComplete}
      >
        <div className="intro">
          <h1>Ai Art: what?</h1>
          <p>
            AI or artificial intelligence has become increasingly powerful over
            the years and its only getting more advanced as time goes on such is
            the nature of any technology. Its been better than us at maths and
            logic games like chess for many years already. One domain previously
            unaffected by such things is the creative world.
          </p>
          <p>
            Art, design and illustration have always been the product of very
            real very human minds. Something that sets us apart as a species.
            Our ability to express emotion though these mediums is found nowhere
            else, until now.
          </p>
          <p>
            Algorithms trained on huge amounts of data can now be used to create
            a completely original piece of artwork, just from a short prompt
            written by a human. It will produce this for you in a matter of
            seconds <strong>and</strong> it will be stunning.
          </p>
        </div>
        <div className="softwareGrid">
          <h2 id="softwareTitle">The software</h2>

          <p id="opis">
            There are a number of companies that have created these art
            generating programs some are more powerful than others.Some of the
            big players are Midjourney and Open Ai's DAll-E 2 but there are many
            less sophisticated programs.
          </p>
          <div className="mid">
            <img
              src={mid}
              id="mid"
              alt="neon turquoise outline of a ship, the midJourney logo"
            ></img>
            <p id="midP">
              MidJourney, an AI program from San Francisco. Uses Discord to host
              its service, users craft their prompt and use bot commands to
              create a series of four unique images. The first 25 images are
              free but then you gotta pay up.
            </p>
          </div>
          <div className="open">
            <img src={open} id="open" alt="open AI symbol"></img>
            <p id="openP">
              DALL-E 2 is an AI program by openAI, the creators of chatGPT. The
              website offers users a small amounts of free credits every month
              to create their images, after that you will need to give them your
              money.
            </p>
          </div>
        </div>
        <div className="quote-container">
          <q id="quote">
            {" "}
            By far, the greatest danger of Artificial Intelligence is that
            people conclude too early that they understand it.{" "}
          </q>{" "}
          <span> - Eliezer Yudkowsky</span>
        </div>
        {showCarousel && (
          <motion.div
            key="carousel"
            className="carousel-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <CarouselPics />
          </motion.div>
        )}

        <p className="about-images">
          I found myself getting lost in the creation of these images, interest
          what the ai brain would come up with, the speed and quality of the art
          produced can't be denied. Although isn't art something more than just
          the pure visuals? no actual feeling or emotion played any role in
          creating these, there is something very detached and clinical about
          it.. but does that matter?
        </p>

        <p className="play-game" id="play-para">
          I present to you, a game, can you tell the difference between art
          created by a computer or by me, a real life human..
        </p>
        <div className="only-button">
          <motion.a
            whileHover={{
              scale: 1.1,
              transition: { duration: 2 },
            }}
            whileTap={{ scale: 0.8 }}
            className="play-game"
            id="play-button"
            onClick={() => {
              navigate("/Game");
            }}
          >
            Play!
          </motion.a>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Home;
