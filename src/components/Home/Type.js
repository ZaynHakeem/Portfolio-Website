import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Game Developer",
          "UI/UX Enthusiast",
          "Fullstack Developer",
          "Quantitative Researcher",
          "Tech Enthusiast",
          "Problem Solver",
          "Consultant",
          "AI/ML Developer",
          "Open Source Contributor",

        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
