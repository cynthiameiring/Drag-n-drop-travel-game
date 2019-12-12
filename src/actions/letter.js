// export function moveLetter(targetId, letter) {
//   console.log("what is target id?", targetId);
//   return {
//     type: "MOVE_LETTER",
//     targetId: targetId,
//     letter: letter
//   };
// }

export function moveLetter(targetId, letter, previousTarget) {
  return {
    type: "MOVE_LETTER",
    targetId: targetId,
    letter: letter,
    previousTarget: previousTarget
  };
}

export function currentLetterDragged(letter, targetId) {
  return {
    type: "CURRENT_LETTER",
    letter: letter,
    targetId: targetId
  };
}
