import React from "react";
import { connect } from "react-redux";
import textballoon from "../media/textballoon.png";
import adventurer from "../media/adventurer.png";
import UIfx from "uifx";
import "./Adventurer.css";
import celebrationAudio from "../media/celebration.wav";
import Typist from "react-typist";

export default function Adventurer(props) {
  const celebration = new UIfx(celebrationAudio);
  let string = "Drag and drop the letters to guess the word!";

  if (props.guess === "correct") {
    string = "Well done my dear traveler! Try a new word.";
    celebration.play();
  } else if (props.guess === "false") {
    string = "Don't give up, try again!";
  }

  return (
    <div className="bottom-component">
      <div className="container">
        <img className="textballoon" alt="textballoon" src={textballoon}></img>
        <Typist key={props.randomKey} cursor className="typewriter-text">
          {string}
        </Typist>
      </div>
      <img className="adventurer" alt="adventurer" src={adventurer}></img>
    </div>
  );
}
