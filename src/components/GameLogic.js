import React from "react";
import { connect } from "react-redux";
import { correctWord } from "../actions/word";
import { wrongWord } from "../actions/word";
// import uifx from "uifx";

function GameLogic(props) {
  const guessedLetters = props.targets.map(target => target.letter);
  console.log("guessedLetter", guessedLetters);
  const guessedWord = guessedLetters.join("");
  console.log("guessedWord", guessedWord);
  if (guessedWord === props.pickedWord) {
    console.log("hoera!");
    props.correctWord();
    return null;
    // this.props.startNewGame();
  } else {
    console.log("wrong guess");
    props.wrongWord();
    return null;
  }
}

//   checkWord(targets) {
//     console.log("check word", this.props.pickedWord);
//     const guessedLetters = targets.map(target => target.letter);
//     console.log("guessedLetter", guessedLetters);
//     const guessedWord = guessedLetters.join("");
//     console.log("guessedWord", guessedWord);
//     if (guessedWord === this.props.pickedWord) {
//       console.log("hoera!");
//       this.props.correctWord();
//       // this.props.startNewGame();
//     } else {
//       console.log("wrong guess");
//       return this.props.wrongWord();
//     }
//   }

//   render() {
//     const targets = [...this.props.targetBlocks];
//     targets.splice(0, this.props.letters.length);
//     console.log("targets", targets);
//     const allTargetsFilled = targets.every(target => target.letter !== null);
//     console.log("alltargets filled", allTargetsFilled);
//     if (allTargetsFilled) {
//       this.checkWord(targets);
//       return null;
//     } else return null;
//   }
// }

// const mapStateToProps = state => {
//   return {
//     letters: state.letters,
//     targetBlocks: state.targetBlocks,
//     points: state.points
//   };
// };

export default connect(null, {
  correctWord,
  wrongWord
})(GameLogic);
