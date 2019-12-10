import React, { Component } from "react";
import { connect } from "react-redux";
import Letter from "./Letter";
import Target from "./Target";
import "./Letter.css";
import { moveLetter, getLetters, getTargets } from "../actions/letter";
import { pickWord } from "../actions/word";

class LetterContainer extends Component {
  state = {
    className: "target"
  };
  componentDidMount() {
    this.props.pickWord();
    this.props.getLetters();
    this.props.getTargets(3);
  }
  render() {
    if (!this.props.letters) {
      return "loading..";
    }
    console.log("letters:", this.props.letters);
    return (
      <div>
        <div
          className="letter-container"
          // style={{ overflow: "hidden", clear: "both" }}
        >
          {this.props.letters.map(letter => (
            <Letter
              name={letter}
              className="letter"
              currentLetterDragged={this.currentLetterDragged}
            />
          ))}
        </div>
        <div
          className="letter-container"
          // style={{ overflow: "hidden", clear: "both" }}
        >
          {this.props.targetBlocks.map(target => (
            <Target
              id={target.id}
              className={target.className}
              letter={target.nameLetter}
              moveLetter={this.props.moveLetter}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    letters: state.letters,
    targetBlocks: state.targetBlocks
  };
};

export default connect(mapStateToProps, {
  moveLetter,
  getLetters,
  getTargets,
  pickWord
})(LetterContainer);
