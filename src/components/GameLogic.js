import React, { Component } from "react";
import { connect } from "react-redux";

class GameLogic extends Component {
  checkWord() {
    console.log("check word", this.props.pickedWord);
  }

  render() {
    // const allClassNames = this.props.targetBlocks.map(
    //   target => target.className
    // );
    // console.log("allclassnames", allClassNames);
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
