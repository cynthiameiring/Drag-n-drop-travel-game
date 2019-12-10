export default (state = [], action) => {
  if (action.type === "GET_LETTERS") {
    for (let i = 0; i < action.payload.length; i++) {
      state.push({ id: i, className: "target", nameLetter: "" });
    }
    return state;
  } else if (action.type === "MOVE_LETTER") {
    const id = action.targetId;
    const newClass = "letter";
    const newLetter = action.letter;
    const newState = [...state];
    newState[id].className = newClass;
    newState[id].nameLetter = newLetter;
    return newState;
  }
  return state;
};
