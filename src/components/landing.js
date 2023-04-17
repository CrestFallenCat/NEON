import React from "react";
// import "./components/landingCSS";
import shipwreck from "./pics/ship.png";
import synthwave from "./pics/synth.png";

export function Landing() {
  return (
    <div className="container">
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
      <div className="software">
        <h2>The software</h2>
        <p>
          There are a number of companies that have created these art generating
          programs some are more powerful than others.Some of the big players
          are Midjourney and Open Ai's DAll-E 2 but there are many less
          sophisticated programs.
        </p>
        <img src={shipwreck} alt="AI art of a shipwreck"></img>
        <figcaption>
          I used DALL-E to create this, it was given the prompt: "digital art,
          ship wreck dark sea underwater" it did this in about 10 seconds.
        </figcaption>
        <img
          src={synthwave}
          alt="four separate pictures of an industrial cityscape with a neon colour palette"
        ></img>
        <figcaption>
          Midjourny was used to create this, with the prompt: "A monumental,
          Michelangelo-esque landscape of a once-bustling factory, now
          controlled by AI, with disoriented workers experiencing ennui as they
          drift through a vibrant haze of dark neon synth colors
        </figcaption>
        <p>What can </p>
      </div>
    </div>
  );
}

export default Landing;
