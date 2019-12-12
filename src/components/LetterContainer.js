import React, { Component } from "react";
import { connect } from "react-redux";
import Letter from "./Letter";
import Target from "./Target";
import "./Letter.css";
import { moveLetter } from "../actions/letter";
import { getLetters } from "../actions/word";
import { words } from "../data";
import GameLogic from "./GameLogic";
import shortid from "shortid";
import textballoon from "../pictures/textballoon.png";
import adventurer from "../pictures/adventurer.png";

class LetterContainer extends Component {
  state = { pickedWord: null, randomKey: null };

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

  renderLetter(letter, targetId) {
    console.log("render a letter");
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

  handleClick = () => {
    this.pickWord();
    //generate a random Key for the animation to happen when rerendering
    this.setState({ randomKey: shortid.generate() });
  };

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
    console.log("targets", targets);
    const allTargetsFilled = targets.every(target => target.letter !== null);
    console.log("alltargets filled", allTargetsFilled);

    return (
      <div className="app">
        <div className="travel-image-container" key={this.state.randomKey}>
          {" "}
          <img
            alt=""
            className="animated travel-image"
            src={this.state.pickedWord.url}
          ></img>
        </div>

        <div
          className="letter-container"
          // style={{ overflow: "hidden", clear: "both" }}
        >
          {firstHalf.map(target => (
            <Target
              key={target.id}
              id={target.id}
              moveLetter={this.props.moveLetter}
              className="target"
            >
              {this.renderLetter(target.letter, target.id)}
            </Target>
          ))}
        </div>
        <div className="target-container">
          {secondHalf.map(target => (
            <Target
              key={target.id}
              id={target.id}
              moveLetter={this.props.moveLetter}
              className="placeholder"
            >
              {this.renderLetter(target.letter, target.id)}
            </Target>
          ))}
        </div>

        {allTargetsFilled ? (
          <GameLogic
            pickedWord={this.state.pickedWord.word}
            targets={targets}
          />
        ) : (
          ""
        )}
        {/* <GameLogic pickedWord={this.state.pickedWord.word} /> */}
        <div className="button-container">
          <button className="button" onClick={this.handleClick}>
            Next
          </button>
        </div>
        <div className="textballoon-container">
          <div className="container">
            <img
              className="textballoon"
              alt="textballoon"
              src={textballoon}
            ></img>
            <div className="bottom-right">
              Drag the letters to guess the right word, good luck!
            </div>
          </div>
          <img className="adventurer" alt="adventurer" src={adventurer}></img>
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
  getLetters
})(LetterContainer);
