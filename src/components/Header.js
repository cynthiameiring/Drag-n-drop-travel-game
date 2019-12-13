import React from "react";
import "./Header.css";

export default function Header(props) {
  return (
    <div>
      <div className="point-counter" key={props.randomKeyforPoints}>
        <p className="animated points">Points : {props.points}</p>
        <div className="buffer"> Buffer</div>
      </div>
      <div className="travel-image-container" key={props.randomKeyForImage}>
        {" "}
        <img
          alt=""
          className="animated travel-image"
          src={props.pickedWordUrl}
        ></img>
      </div>
    </div>
  );
}
