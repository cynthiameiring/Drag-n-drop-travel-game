export default (state = [], action) => {
  if (action.type === "CURRENT_LETTER") {
    const newState = [action.letter, action.targetId];
    return newState;
  }
  return state;
};
