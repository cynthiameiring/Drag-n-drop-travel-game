import { combineReducers } from "redux";
import letter from "./letter";
import targetBlocks from "./targetBlocks";
import currentLetter from "./currentLetter";
import points from "./points";
import guess from "./guess";

export default combineReducers({
  letters: letter,
  points: points,
  targetBlocks: targetBlocks,
  currentLetter: currentLetter,
  guess: guess
});
