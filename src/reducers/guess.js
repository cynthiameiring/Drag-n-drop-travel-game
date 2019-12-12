export default (state = null, action) => {
  if (action.type === "WRONG_WORD") {
    return action.payload;
  } else if (action.type === "CORRECT_WORD") {
    return action.payload;
  } else if (action.type === "GET_LETTERS") {
    return null;
  }
  return state;
};
