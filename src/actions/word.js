import { words } from "../data";

export function pickWord() {
  const numberOfWords = words.length;
  const randomNumber = Math.floor(Math.random() * numberOfWords);
  const pickedWord = words[randomNumber];
  const letters = pickedWord.split("");
  console.log("letters", letters);
  return {
    type: "PICK_WORD",
    payload: pickedWord
  };
}
