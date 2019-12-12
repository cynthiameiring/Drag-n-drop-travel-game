export default (state = 0, action) => {
  if (action.type === "CORRECT_WORD") {
    const newState = state + 1;
    return newState;
  } else if (action.type === "WRONG_WORD") {
    if (state === 0) {
      return state;
    } else {
      const newState = state - 1;
      return newState;
    }
  }
  return state;
};
