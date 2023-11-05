import { TypeAnimation } from "react-type-animation";
import "../../css/landing/landingtext.css";
import { motion, animate, useAnimate, stagger } from "framer-motion";
import { useEffect, useState } from "react";

const LandingText = () => {
  return (
    <div className="landing-text">
      <motion.div
        initial={{ opacity: 0, x: "-5vw" }}
        animate={{ opacity: 1, x: "0" }}
        exit={{ opacity: 0, x: "-5vw" }}
        className="landing-title"
      >
        <p>Hi, I'm Matthew</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: "-5vw" }}
        animate={{ opacity: 1, x: "0" }}
        exit={{ opacity: 0, x: "-5vw" }}
        transition={{ delay: 0.25 }}
        className="landing-typewriter"
      >
        <div className="texttitle">
          <TypeAnimation
            sequence={["Developer", 3000, "Programmer", 3000, "Designer", 3000]}
            speed={10}
            repeat={Infinity}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default LandingText;
