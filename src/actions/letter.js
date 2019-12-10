export function getTargets(lengthOfWord) {
  return {
    type: "GET_TARGETBLOCKS",
    payload: lengthOfWord
  };
}

export function moveLetter(targetId, letter) {
  console.log("what is target id?", targetId);
  return {
    type: "MOVE_LETTER",
    targetId: targetId,
    letter: letter
  };
}

export function currentLetterDragged(letter) {
  return {
    type: "CURRENT_LETTER",
    payload: letter
  };
}
