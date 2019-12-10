import React, { Component } from "react";
import { connect } from "react-redux";
import Letter from "./Letter";
import Target from "./Target";
import "./Letter.css";
import { moveLetter } from "../actions/letter";
import { pickWord } from "../actions/word";

class LetterContainer extends Component {
  state = {
    letters: []
  };
  componentDidMount() {
    this.props.pickWord();
    this.setState({ letters: this.props.letters });
    // console.log("state", this.state.letters);
    // this.props.getTargets(this.state.letters.length);

    // const amountOfLetters = this.props.letters.length;
    // console.log("letters.length", amountOfLetters);
    // this.props.getTargets(amountOfLetters);
  }
  render() {
    if (this.props.targetBlocks.length.length === 0) {
      return "loading..";
    }
    console.log("hio:", this.props.letters);
    console.log("targetBlocks", this.props.targetBlocks.length);
    return (
      <div>
        <div
          className="letter-container"
          // style={{ overflow: "hidden", clear: "both" }}
        >
          {this.props.letters.map((letter, index) => (
            <Letter
              key={index}
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
            <>
              <Target
                key={target.id}
                id={target.id}
                className={target.className}
                letter={target.nameLetter}
                moveLetter={this.props.moveLetter}
              />
            </>
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
  pickWord
})(LetterContainer);
