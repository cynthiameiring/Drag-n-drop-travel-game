import { combineReducers } from "redux";
import letter from "./letter";
import targetBlocks from "./targetBlocks";

export default combineReducers({
  letters: letter,
  targetBlocks: targetBlocks
});
