export default (state = [], action) => {
  if (action.type === "CURRENT_LETTER") {
    const newState = [action.letter, action.targetId];
    return newState;
  }
  return state;
};

// clearState.push({
//   id: i,
//   letter: letters[i]
//   // ,className: "target", nameLetter: ""
// });
