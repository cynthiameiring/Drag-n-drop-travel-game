import React from "react";
import { connect } from "react-redux";
import textballoon from "../pictures/textballoon.png";
import adventurer from "../pictures/adventurer.png";
import "./Adventurer.css";

function Adventurer(props) {
  let string = "Good luck!";
  if (props.guess === "correct") {
    string = "Well done!!";
  } else if (props.guess === "false") {
    string = "Try again!";
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
