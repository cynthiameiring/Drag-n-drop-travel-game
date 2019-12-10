export default (state = null, action) => {
  if (action.type === "CURRENT_LETTER") {
    return action.payload;
  }
  return state;
};
