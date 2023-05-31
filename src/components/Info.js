import "./Info.css";
import React from "react";
import { motion } from "framer-motion";
import Cards from "./Cards";

export function Info() {
  const mountCards = window.innerWidth > 1170;
  return (
    <motion.div
      key="home"
      className="home"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <div>
        <h1 id="title">Future of art?</h1>
      </div>

      <div>
        <p>
          Traditionally, human art has been celebrated for its uniqueness and
          the inherent human experiences and emotions it encapsulates. AI has
          shown that it can generate artworks that possess similar qualities,
          blurring the line between what is created by humans and what is
          created by machines.
        </p>
        <p>
          This advancement has sparked worry among artists who fear that their
          livelihoods may be threatened. With AI capable of generating art that
          is aesthetically pleasing and conceptually rich, some artists feel
          that their creative expertise is being overshadowed.
        </p>
        <p>
          The impact of AI on the art industry raises significant questions
          about cost and efficiency. Creating art is often a time-consuming
          process that can take weeks, if not months, to complete. For
          businesses or individuals commissioning artwork, this extended
          timeline can result in higher costs and delayed deliverables.
        </p>
        <p>
          In contrast, AI offers a faster alternative. Machine learning
          algorithms can analyze vast amounts of data and generate art in a
          fraction of the time it would take a human artist. This accelerated
          production process has the potential to attract businesses and clients
          looking for quick turnaround times and cost-effective solutions.
        </p>
        <p>
          Rather than viewing AI as a threat, some artists have embraced it as a
          new tool for exploration and inspiration. They see AI as a
          collaborator that can augment their creative process, pushing the
          boundaries of what is possible.
        </p>
        <div className="human-art">
          <h2> A few thoughts.. </h2>
          <p>
            Here are a few reasons i personally think there will always be a
            place for human art.
          </p>
          {mountCards && <Cards />}
        </div>
        <p id="last-para">
          The human touch, the personal perspective, and the emotional depth
          conveyed through brushstrokes, sculpting, or any other artistic medium
          have an undeniable allure.
        </p>
      </div>
    </motion.div>
  );
}

export default Info;
