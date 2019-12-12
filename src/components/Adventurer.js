import React from "react";
import { connect } from "react-redux";
import textballoon from "../media/textballoon.png";
import adventurer from "../media/adventurer.png";
import UIfx from "uifx";
import "./Adventurer.css";
import celebrationAudio from "../media/celebration.wav";
import failAudio from "../media/fail.wav";

function Adventurer(props) {
  const celebration = new UIfx(celebrationAudio);
  const fail = new UIfx(failAudio);
  let string = "Good luck!";
  if (props.guess === "correct") {
    string = "Well done!!";
    celebration.play();
  } else if (props.guess === "false") {
    string = "Try again!";
    fail.play();
  }

  return (
    <div className="textballoon-container">
      <div className="container">
        <img className="textballoon" alt="textballoon" src={textballoon}></img>

        <div key={props.randomKey} className="bottom-right">
          <p className="typewriter-text">{string}</p>
        </div>
      </div>
      <img className="adventurer" alt="adventurer" src={adventurer}></img>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    guess: state.guess
  };
};

export default connect(mapStateToProps)(Adventurer);
