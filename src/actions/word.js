import { words } from "../data";

export const pickWord = () => {
  const numberOfWords = words.length;
  const randomNumber = Math.floor(Math.random() * numberOfWords);
  const pickedWord = words[randomNumber];
  const letters = pickedWord.split("");
  console.log("letters", letters);
  const amountOfLetters = letters.length;
  console.log("amount of letters", amountOfLetters);

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
