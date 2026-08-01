import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [

          "Web Developer",
          "Automation Tester",
          "Manual Tester",

          "Developer",
          "Front-End Developer",
          "PSD Conversion",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
