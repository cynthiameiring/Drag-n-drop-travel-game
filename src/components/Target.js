import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import { connect } from "react-redux";
import { moveLetter } from "../actions/letter";

const squareStyle = {
  width: "100%",
  height: "100%"
};

function selectBackgroundColor(isActive) {
  if (isActive) {
    return "rgb(100, 100, 100)";
  } else {
    return;
  }
}

function Target(props) {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ItemTypes.LETTER,
    drop: () => props.moveLetter(props.target, props.currentLetter),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });
  const isActive = canDrop && isOver;
  const backgroundColor = selectBackgroundColor(isActive);
  return (
    <div ref={drop} style={{ backgroundColor }} className={props.className}>
      <div
        style={{
          ...squareStyle
        }}
      >
        {props.children}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    currentLetter: state.currentLetter
  };
};

export default connect(mapStateToProps, { moveLetter })(Target);
