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
          So what does this mean for the worlds artists? There has been worry in
          the creative community that this will effect their lively hoods. It
          had been thought that computers would never create anything close to
          human art but speed at which AI is improving
        </p>
        <p>
          Traditionally, human art has been celebrated for its uniqueness and
          the inherent human experiences and emotions it encapsulates. The
          ability to create something visually captivating or emotionally
          evocative has long been considered a distinctly human trait. However,
          AI has shown that it can generate artworks that possess similar
          qualities, blurring the line between what is created by humans and
          what is created by machines.
        </p>
        <p>
          This advancement has sparked worry among artists who fear that their
          livelihoods may be threatened. With AI capable of generating art that
          is aesthetically pleasing and conceptually rich, some artists feel
          that their creative expertise is being overshadowed. They worry that
          their unique perspectives and personal touch may no longer be as
          valuable in a world where AI can produce art that appears to be better
          or more innovative than what humans can create.
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
          AI-generated art may be seen as a more practical option, particularly
          for commercial purposes, where meeting deadlines and reducing expenses
          are paramount.
        </p>
        <p>
          Rather than viewing AI as a threat, some artists have embraced it as a
          new tool for exploration and inspiration. They see AI as a
          collaborator that can augment their creative process, pushing the
          boundaries of what is possible. Artists can leverage AI algorithms to
          generate novel ideas, explore new techniques, or even create hybrid
          artworks that merge human creativity with machine-generated elements.
          This symbiotic relationship between artists and AI has the potential
          to unlock new artistic possibilities and generate groundbreaking works
          that may not have been achievable through human artistry alone.
        </p>
        {mountCards && <Cards />}
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
