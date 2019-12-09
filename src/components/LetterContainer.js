import React from "react";
import Letter from "../drag-drop/Letter";
import "../drag-drop/Letter.css";
//import Letter from './Letter'

export default function LetterContainer() {
  return (
    <div>
      {/* <div style={{ overflow: "hidden", clear: "both" }}>
        <Target allowedDropEffect="any" />
        <Target allowedDropEffect="copy" />
        <Target allowedDropEffect="move" />
      </div> */}
      <div
        className="letter-container"
        style={{ overflow: "hidden", clear: "both" }}
      >
        <Letter name="A" className="letter" />
        <Letter name="B" className="letter" />
      </div>
    </div>
  );
}
