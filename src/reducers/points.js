export default (state = null, action) => {
  console.log("is this happening?");
  if (action.type === "CORRECT_WORD") {
    if (state === null) {
      return 1;
    }
    const newState = state + 1;
    console.log("what is new state", newState);
    return newState;
  } else if (action.type === "WRONG_WORD") {
    if (state === null) {
      return state;
    } else {
      const newState = state - 1;
      return newState;
    }
  }
  return state;
};
