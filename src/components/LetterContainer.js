import React, { Component } from "react";
import { connect } from "react-redux";
import Letter from "./Letter";
import Target from "./Target";
import "./Letter.css";
import { moveLetter } from "../actions/letter";
import { getLetters } from "../actions/word";
import { words } from "../data";
import GameLogic from "./GameLogic";

class LetterContainer extends Component {
  state = { pickedWord: null };

  componentDidMount() {
    this.pickWord();
    // this.setState({});
  }

  pickWord = () => {
    const numberOfWords = words.length;
    const randomNumber = Math.floor(Math.random() * numberOfWords);
    const pickedWord = words[randomNumber];
    this.props.getLetters(pickedWord);
    this.setState({ pickedWord: pickedWord });
  };

  renderLetter(letter, targetId) {
    console.log("render a letter");
    if (!letter) {
      return <div></div>;
    }
    return (
      <Letter
        targetId={targetId}
        name={letter}
        currentLetterDragged={this.currentLetterDragged}
      />
    );
  }

  render() {
    if (this.props.targetBlocks.length === 0) {
      return "loading..";
    }
    console.log("new letters", this.props.letters);
    return (
      <div>
        <div
          className="letter-container"
          // style={{ overflow: "hidden", clear: "both" }}
        >
          {this.props.targetBlocks.map(target => (
            <Target
              key={target.id}
              id={target.id}
              moveLetter={this.props.moveLetter}
            >
              {this.renderLetter(target.letter, target.id)}
            </Target>
          ))}
        </div>
        <GameLogic
          startNewGame={this.pickWord}
          pickedWord={this.state.pickedWord}
          amountOfLetters={this.props.letters.length}
        />
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
  getLetters
})(LetterContainer);
