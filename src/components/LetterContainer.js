import React, { Component } from "react";
import { connect } from "react-redux";
import Letter from "./Letter";
import TargetContainer from "./TargetContainer";
import "./Letter.css";
import { getLetters } from "../actions/word";
import { words } from "../data";
import shortid from "shortid";
import Adventurer from "./Adventurer";
import Header from "./Header";
import { correctWord } from "../actions/word";
import { wrongWord } from "../actions/word";

class LetterContainer extends Component {
  state = {
    pickedWord: null,
    randomKeyForPoints: null,
    randomKeyForImage: null
  };

  componentDidMount() {
    this.pickWord();
    // this.setState({});
  }

  pickWord = () => {
    const numberOfWords = words.length;
    const randomNumber = Math.floor(Math.random() * numberOfWords);
    const pickedWord = words[randomNumber];
    this.props.getLetters(pickedWord.word);
    this.setState({ pickedWord: pickedWord });
  };

  handleClick = () => {
    this.pickWord();
    //generate a random Key for the animation to happen when rerendering
    this.setState({ randomKeyForImage: shortid.generate() });
  };

  checkWord = () => {
    const secondHalf = [...this.props.targetBlocks].splice(
      this.props.letters.length
    );
    const guessedLetters = secondHalf.map(target => target.letter);
    const guessedWord = guessedLetters.join("");
    if (guessedWord === this.state.pickedWord.word) {
      this.props.correctWord();
    } else {
      this.props.wrongWord();
    }
    this.setState({ randomKeyForPoints: shortid.generate() });
  };
  renderLetter(letter, targetId) {
    if (!letter) {
      return null;
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
    const firstHalf = [...this.props.targetBlocks].splice(
      0,
      this.props.letters.length
    );
    const secondHalf = [...this.props.targetBlocks].splice(
      this.props.letters.length
    );
    const targets = [...this.props.targetBlocks];
    targets.splice(0, this.props.letters.length);
    const allTargetsFilled = targets.every(target => target.letter !== null);
    return (
      <div className="app">
        <Header randomKey={this.state.randomKeyForPoints} />
        <div
          className="travel-image-container"
          key={this.state.randomKeyForImage}
        >
          {" "}
          <img
            alt=""
            className="animated travel-image"
            src={this.state.pickedWord.url}
          ></img>
        </div>

        <div className="letter-container">
          {firstHalf.map(target => (
            <TargetContainer key={target.id} target={target} className="target">
              {this.renderLetter(target.letter, target.id)}
            </TargetContainer>
          ))}
        </div>
        <div className="target-container">
          {secondHalf.map(target => (
            <TargetContainer
              key={target.id}
              target={target}
              className="placeholder"
            >
              {this.renderLetter(target.letter, target.id)}
            </TargetContainer>
          ))}
        </div>

        <div className="button-container">
          {allTargetsFilled ? (
            <button className="button" onClick={this.checkWord}>
              Check
            </button>
          ) : (
            <button className="button-invisible" onClick={this.checkWord}>
              Check
            </button>
          )}
          {this.props.guess === "correct" ? (
            <button className="button" onClick={this.handleClick}>
              Next
            </button>
          ) : (
            <button className="button-invisible" onClick={this.handleClick}>
              Next
            </button>
          )}
        </div>
        <Adventurer randomKey={this.state.randomKeyForPoints} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    guess: state.guess,
    letters: state.letters,
    targetBlocks: state.targetBlocks
  };
};

export default connect(mapStateToProps, {
  correctWord,
  wrongWord,
  getLetters
})(LetterContainer);
