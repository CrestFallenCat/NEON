import React from "react";
import { motion } from "framer-motion";
import "./nextCSS.css";

export function Next() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <h1 id="title">The future of the creative..</h1>
      <p>
        So what's next for us creative types? is this the end for innovation
        from humans in favour of faster and more efficient ai?
      </p>
      <p>
        These next parts are just my reflections. But I think there will always
        be a place for human art
      </p>
      <p>
        I don't think people will pay the money they do for famous artists if
        that artist is not alive at all and did it without any care in 2
        seconds, people who may that kind of money are usually drawn to the
        piece by its backstory or meaning, not simply 'it looks nice here is 2
        million of my money'
      </p>
      <p>
        However, the artists that make a living like that are the exception, not
        the rule. They are the lucky ones who can push out anything sell it in a
        heartbeat. What about illustrators and people earing just enough by
        taking on small projects for companies, logo design and the like
      </p>
      <p>
        I do think these people will suffer, companies and corporations don't
        care and the backstory they care about profit and margins, and simply
        put, robots are cheaper and faster. Unfortunately (or not, depending on
        how you see it) AI isnt going anywhere. It will get better and be better
        than us... at pretty much everything.
      </p>
      <p>We must accept that and we must adapt</p>
    </motion.div>
  );
}

export default Next;
