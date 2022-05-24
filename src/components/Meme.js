import React from "react";

// scss
import "../scss/meme.scss";

export default function Meme(props) {
  return (
    <div className="meme-wrapper">
      <p className="meme-wrapper__top-text">{props.topText}</p>
      <img
        src={props.memeImage}
        alt=""
      />
      <p className="meme-wrapper__bottom-text">{props.bottomText}</p>
    </div>
  );
}
