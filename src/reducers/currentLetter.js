export default (state = [], action) => {
  if (action.type === "CURRENT_LETTER") {
    const newState = [action.letter, action.targetId];
    // newState.letter = action.letter;
    // newState.targetId = action.targetId;
    console.log("what is newState?", newState);
    return newState;
  }
  return state;
};

// clearState.push({
//   id: i,
//   letter: letters[i]
//   // ,className: "target", nameLetter: ""
// });
