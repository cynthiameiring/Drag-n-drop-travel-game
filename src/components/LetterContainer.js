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

  render() {
    if (this.props.targetBlocks.length === 0) {
      return "loading..";
    }
    console.log("new letters", this.props.letters);
    return (
      <div>
        <div
          className="letter-container"
          style={{ overflow: "hidden", clear: "both" }}
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
          style={{ overflow: "hidden", clear: "both" }}
        >
          {this.props.targetBlocks.map(target => (
            <Target
              key={target.id}
              id={target.id}
              className={target.className}
              letter={target.nameLetter}
              moveLetter={this.props.moveLetter}
            />
          ))}
        </div>
        {this.props.targetBlocks.length !== 0 ? (
          <GameLogic
            startNewGame={this.pickWord}
            pickedWord={this.state.pickedWord}
          />
        ) : (
          ""
        )}
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
