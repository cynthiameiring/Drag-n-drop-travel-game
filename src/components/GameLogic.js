import React, { Component } from "react";
import { connect } from "react-redux";
// import uifx from "uifx";

class GameLogic extends Component {
  checkWord() {
    console.log("check word", this.props.pickedWord);
    const guessedLetters = this.props.targetBlocks.map(
      target => target.nameLetter
    );
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
    const allTargetsFilled = this.props.targetBlocks.every(
      target => target.className === "letter"
    );
    console.log("alltargets filled", allTargetsFilled);
    if (allTargetsFilled) {
      this.checkWord();
      return null;
    } else return null;
  }
}

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
