import React, { Component } from "react";
import { connect } from "react-redux";
import Letter from "./Letter";
import Target from "./Target";

class TargetContainer extends Component {
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
    const firstHalf = [...this.props.targetBlocks].splice(
      0,
      this.props.letters.length
    );
    const secondHalf = [...this.props.targetBlocks].splice(
      this.props.letters.length
    );
    return (
      <div>
        <div className="letter-container">
          {firstHalf.map(target => (
            <Target key={target.id} target={target} className="target">
              {this.renderLetter(target.letter, target.id)}
            </Target>
          ))}
        </div>
        <div className="target-container">
          {secondHalf.map(target => (
            <Target key={target.id} target={target} className="placeholder">
              {this.renderLetter(target.letter, target.id)}
            </Target>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    targetBlocks: state.targetBlocks,
    letters: state.letters
  };
};

export default connect(mapStateToProps)(TargetContainer);
