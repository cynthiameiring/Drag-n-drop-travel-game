export default (state = [], action) => {
  if (action.type === "GET_TARGETS") {
    for (let i = 0; i < action.payload; i++) {
      console.log("what is length?", action.payload);
      state.push({ id: i, className: "target" });
      console.log("what is state?", state);
    }
    return state;
  } else if (action.type === "MOVE_LETTER") {
    const id = action.payload;
    const newClass = "letter";
    const newState = [...state];
    newState[id].className = newClass;

    console.log("newState[id]", newState[id]);
    return newState;
  }
  return state;
};
