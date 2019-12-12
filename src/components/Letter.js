import React from "react";
import { useDrag } from "react-dnd";
import { connect } from "react-redux";
import { ItemTypes } from "./ItemTypes";
import { currentLetterDragged } from "../actions/letter";

function Letter({ targetId, name, currentLetterDragged }) {
  const [{ opacity }, drag] = useDrag({
    item: { name, type: ItemTypes.LETTER },
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
      nameLetter: monitor.isDragging()
        ? currentLetterDragged(name, targetId)
        : ""
    })
  });
  return (
    <div ref={drag} className="letter" style={{ opacity }}>
      {name}
    </div>
  );
}

export default connect(null, { currentLetterDragged })(Letter);
