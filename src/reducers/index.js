import { combineReducers } from "redux";
import letter from "./letter";
import targetBlocks from "./targetBlocks";
import currentLetter from "./currentLetter";
import points from "./points";

export default combineReducers({
  letters: letter,
  points: points,
  targetBlocks: targetBlocks,
  currentLetter: currentLetter
});
