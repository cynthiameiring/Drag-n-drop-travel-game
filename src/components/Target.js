import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import { connect } from "react-redux";

function selectBackgroundColor(isActive, canDrop) {
  if (isActive) {
    return "rgb(100, 100, 100)";
  } else if (canDrop) {
    return;
    // "rgb(200, 200, 200)";
  } else {
    return;
  }
}

function Target(props) {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ItemTypes.LETTER,
    drop: () => props.moveLetter(props.id, props.currentLetter),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });
  const isActive = canDrop && isOver;
  const backgroundColor = selectBackgroundColor(isActive, canDrop);
  return (
    <div ref={drop} style={{ backgroundColor }} className={props.className}>
      {props.letter}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    currentLetter: state.currentLetter
  };
};

export default connect(mapStateToProps)(Target);
