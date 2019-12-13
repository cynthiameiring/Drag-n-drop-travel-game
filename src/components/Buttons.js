import React from "react";
import "./Buttons.css";

export default function Buttons(props) {
  const targets = [...props.targetBlocks];
  targets.splice(0, props.letters.length);
  const allTargetsFilled = targets.every(target => target.letter !== null);

  return (
    <div className="button-container">
      {allTargetsFilled && (props.guess === null || props.guess === "false") ? (
        <button className="button" onClick={props.checkWord}>
          Check
        </button>
      ) : (
        <button className="button-invisible" onClick={props.checkWord}>
          Check
        </button>
      )}
      {props.guess === "correct" ? (
        <button className="button" onClick={props.handleClick}>
          Next
        </button>
      ) : (
        <button className="button-invisible" onClick={props.handleClick}>
          Next
        </button>
      )}
    </div>
  );
}
