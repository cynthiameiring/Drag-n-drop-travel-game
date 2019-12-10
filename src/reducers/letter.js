export default (state = [], action) => {
  if (action.type === "GET_LETTERS") {
    return action.payload;
  }
  return state;
};
