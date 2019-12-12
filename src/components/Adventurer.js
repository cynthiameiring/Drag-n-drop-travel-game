import React from "react";
import textballoon from "../pictures/textballoon.png";
import adventurer from "../pictures/adventurer.png";
import Typewriter from "typewriter-effect";

export default function Adventurer() {
  return (
    <div className="textballoon-container">
      <div className="container">
        <img className="textballoon" alt="textballoon" src={textballoon}></img>
        <div className="bottom-right">
          <Typewriter
            options={{
              strings: "Guess the word to collect points. Good luck!",
              autoStart: true,
              cursor: null
            }}
          />
        </div>
      </div>
      <img className="adventurer" alt="adventurer" src={adventurer}></img>
    </div>
  );
}
