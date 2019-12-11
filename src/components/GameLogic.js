import React, { Component } from "react";
import { connect } from "react-redux";
// import uifx from "uifx";

class GameLogic extends Component {
  checkWord(targets) {
    console.log("check word", this.props.pickedWord);
    const guessedLetters = targets.map(target => target.letter);
    console.log("guessedLetter", guessedLetters);
    const guessedWord = guessedLetters.join("");
    console.log("guessedWord", guessedWord);
    if (guessedWord === this.props.pickedWord) {
      console.log("hoera!");
      this.props.startNewGame();
    } else {
      console.log("wrong guess");
    }
  }

  render() {
    const targets = [...this.props.targetBlocks];
    targets.splice(0, this.props.amountOfLetters);
    const allTargetsFilled = targets.every(target => target.letter !== null);
    console.log("alltargets filled", allTargetsFilled);
    if (allTargetsFilled) {
      this.checkWord(targets);
      return null;
    } else return null;
  }
}

//   render() {
//     const targets = this.props.targetBlocks.splice(-this.props.amountOfLetters);
//     console.log("targets", targets);
//     const allTargetsFilled = targets.every(target => target.letter === true);
//     console.log("alltargets filled", allTargetsFilled);
//     if (allTargetsFilled) {
//       this.checkWord();
//       return null;
//     } else return null;
//   }
// }

const mapStateToProps = state => {
  return {
    //   letters: state.letters,
    targetBlocks: state.targetBlocks
  };
};

export default connect(mapStateToProps, {
  // moveLetter,
  // pickWord
})(GameLogic);
