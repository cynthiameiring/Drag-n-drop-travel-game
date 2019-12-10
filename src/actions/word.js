export const getLetters = pickedWord => {
  const letters = pickedWord.split("");

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  shuffle(letters);
  console.log("shuffled letters:", letters);
  return {
    type: "GET_LETTERS",
    payload: letters
  };
};

// export const newWord = () =>
// return {
//     type: ""
// }
