import { Target } from "../components/Target";

export default (state = [], action) => {
  const letters = action.payload;
  if (action.type === "GET_LETTERS") {
    const clearState = [];
    for (let i = 0; i < letters.length; i++) {
      clearState.push({
        id: i,
        letter: letters[i]
      });
    }
    for (let i = 0; i < letters.length; i++) {
      clearState.push({
        id: letters.length + i,
        letter: null
      });
    }
    return clearState;
  } else if (action.type === "MOVE_LETTER") {
    const newLetter = action.currentLetter[0];
    const oldLetter = action.target.letter;
    const newState = [...state];
    newState[action.target.id].letter = newLetter;
    newState[action.currentLetter[1]].letter = oldLetter;

    return newState;
  }
  return state;
};
