import { combineReducers } from "redux";
import letter from "./letter";
import targetBlocks from "./targetBlocks";
import currentLetter from "./currentLetter";

export default combineReducers({
  letters: letter,
  targetBlocks: targetBlocks,
  currentLetter: currentLetter
});
