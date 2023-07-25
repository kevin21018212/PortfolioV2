// components/Landing.js
'use client'
import React from "react";
import{ TypeAnimation } from "react-type-animation";
import  "../componentcss/landing.css"; // Import the CSS module for styling

const Landing=()=> {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <div className="landing-title">
          <h1>Hi, I'm Matthew </h1>
        </div>
        <div className="landing-typewriter">
          <TypeAnimation
            sequence={["Developer", 3000, "Programmer", 3000, "Designer", 3000]}
            wrapper="span"
            speed={10}
            repeat={Infinity}
          />
        </div>
      </div>
    </div>
  );
  
}
export default Landing
