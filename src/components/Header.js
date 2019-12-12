import React from "react";
import { connect } from "react-redux";
import "./Header.css";
// import uifx from "uifx";

function Header(props) {
  return (
    <div className="point-counter" key={props.randomKey}>
      <p className="animated points">Points : {props.points}</p>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    points: state.points
  };
};

export default connect(mapStateToProps)(Header);
