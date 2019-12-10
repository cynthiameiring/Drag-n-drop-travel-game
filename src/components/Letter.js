import React from "react";
import { useDrag } from "react-dnd";
import { connect } from "react-redux";
import { ItemTypes } from "./ItemTypes";
import { currentLetterDragged } from "../actions/letter";

function Letter({ name, currentLetterDragged }) {
  const [{ opacity, nameLetter }, drag] = useDrag({
    item: { name, type: ItemTypes.LETTER },
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
      nameLetter: monitor.isDragging() ? currentLetterDragged(name) : ""
    })
  });

  return (
    <div ref={drag} className="letter" style={{ opacity }}>
      {name}
    </div>
  );
}

export default connect(null, { currentLetterDragged })(Letter);

//import React from "react";
// import ItemTypes from './ItemTypes'
// import { useDrag } from 'react-dnd'
// const style = {
//   border: '1px dashed gray',
//   backgroundColor: 'white',
//   padding: '0.5rem 1rem',
//   marginRight: '1.5rem',
//   marginBottom: '1.5rem',
//   float: 'left',
// }
// const Box = ({ name }) => {
//   const item = { name, type: ItemTypes.BOX }
//   const [{ opacity }, drag] = useDrag({
//     item,
//     end(item, monitor) {
//       const dropResult = monitor.getDropResult()
//       if (item && dropResult) {
//         let alertMessage = ''
//         const isDropAllowed =
//           dropResult.allowedDropEffect === 'any' ||
//           dropResult.allowedDropEffect === dropResult.dropEffect
//         if (isDropAllowed) {
//           const isCopyAction = dropResult.dropEffect === 'copy'
//           const actionName = isCopyAction ? 'copied' : 'moved'
//           alertMessage = `You ${actionName} ${item.name} into ${dropResult.name}!`
//         } else {
//           alertMessage = `You cannot ${dropResult.dropEffect} an item into the ${dropResult.name}`
//         }
//         alert(alertMessage)
//       }
//     },
//     collect: monitor => ({
//       opacity: monitor.isDragging() ? 0.4 : 1,
//     }),
//   })
//   return (
//     <div ref={drag} style={{ ...style, opacity }}>
//       {name}
//     </div>
//   )
// }
// export default Box
