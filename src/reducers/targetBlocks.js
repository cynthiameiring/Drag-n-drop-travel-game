export default (state = [], action) => {
  const letters = action.payload;
  if (action.type === "GET_LETTERS") {
    const clearState = [];
    for (let i = 0; i < letters.length; i++) {
      clearState.push({
        id: i,
        letter: letters[i]
        // ,className: "target", nameLetter: ""
      });
    }
    for (let i = 0; i < letters.length; i++) {
      clearState.push({
        id: letters.length + i,
        letter: null
        // ,className: "target", nameLetter: ""
      });
    }
    return clearState;
  } else if (action.type === "MOVE_LETTER") {
    const id = action.targetId;
    const previousId = action.previousTarget;
    // const newClass = "letter";
    const newLetter = action.letter;
    const newState = [...state];
    // newState[id].className = newClass;
    newState[id].letter = newLetter;
    newState[previousId].letter = null;
    // newState[]
    return newState;
  }
  return state;
};
