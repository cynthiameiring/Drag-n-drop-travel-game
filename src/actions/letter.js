export function getLetters() {
  return {
    type: "GET_LETTERS",
    payload: ["t", "a", "s"]
  };
}

export function getTargets(lengthOfWord) {
  return {
    type: "GET_TARGETS",
    payload: lengthOfWord
  };
}

export function moveLetter(targetId, letterId) {
  console.log("what is target id?", targetId);
  return {
    type: "MOVE_LETTER",
    payload: targetId
  };
}
