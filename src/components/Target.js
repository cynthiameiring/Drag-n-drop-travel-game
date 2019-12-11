import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import { connect } from "react-redux";
import { Square } from "./Square";

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
    drop: () =>
      props.moveLetter(props.id, props.currentLetter, props.previousTarget),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });
  const isActive = canDrop && isOver;
  const backgroundColor = selectBackgroundColor(isActive, canDrop);
  return (
    <div ref={drop} style={{ backgroundColor }} className={props.className}>
      {/* {props.letter} */}
      <Square>{props.children}</Square>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    currentLetter: state.currentLetter[0],
    previousTarget: state.currentLetter[1]
  };
};

export default connect(mapStateToProps)(Target);
