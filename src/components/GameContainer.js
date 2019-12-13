import React, { Component } from "react";
import { connect } from "react-redux";
import shortid from "shortid";

import Header from "./Header";
import TargetContainer from "./TargetContainer";
import Buttons from "./Buttons";
import Adventurer from "./Adventurer";

import { getLetters } from "../actions/word";
import { correctWord } from "../actions/word";
import { wrongWord } from "../actions/word";

import { words } from "../data";
import "./Game.css";

class GameContainer extends Component {
  state = {
    pickedWord: null,
    randomKeyForPoints: null,
    randomKeyForImage: null
  };

  componentDidMount() {
    this.pickWord();
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

  render() {
    if (this.props.targetBlocks.length === 0) {
      return "loading..";
    }
    return (
      <div className="app">
        <Header
          randomKeyForPoints={this.state.randomKeyForPoints}
          randomKeyForImage={this.state.randomKeyForImage}
          pickedWordUrl={this.state.pickedWord.url}
          points={this.props.points}
        />
        <TargetContainer />
        <Buttons
          targetBlocks={this.props.targetBlocks}
          letters={this.props.letters}
          guess={this.props.guess}
          checkWord={this.checkWord}
          handleClick={this.handleClick}
        />
        <Adventurer
          guess={this.props.guess}
          randomKey={this.state.randomKeyForPoints}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    guess: state.guess,
    letters: state.letters,
    targetBlocks: state.targetBlocks,
    points: state.points
  };
};

export default connect(mapStateToProps, {
  correctWord,
  wrongWord,
  getLetters
})(GameContainer);
