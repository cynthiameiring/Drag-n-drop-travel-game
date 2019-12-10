import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";

function selectBackgroundColor(isActive, canDrop) {
  if (isActive) {
    return "rgb(100, 100, 100)";
  } else if (canDrop) {
    return "rgb(200, 200, 200)";
  } else {
    return "white";
  }
}
const Target = ({ allowedDropEffect }) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ItemTypes.LETTER,
    drop: () => ({
      name: `${allowedDropEffect} Target`,
      allowedDropEffect
    }),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });
  const isActive = canDrop && isOver;
  const backgroundColor = selectBackgroundColor(isActive, canDrop);
  return (
    <div ref={drop} style={{ backgroundColor }} className="target">
      {/* {`Works with ${allowedDropEffect} drop effect`}
      <br />
      <br />
      {isActive ? "Release to drop" : "Drag a box here"} */}
    </div>
  );
};
export default Target;
