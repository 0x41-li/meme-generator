import React from "react";

// scss
import "../scss/header.scss";

// icons
import trollFaceLogo from "../assets/icons/troll-face.png";

export default function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <div className="header__logo__img-wrapper">
          <img className="header__logo__img" src={trollFaceLogo} alt="" />
        </div>
        <p className="header__logo__text">Meme Generator</p>
      </div>
      <div className="header__right-part">
        <p className="header__right-part__p">React Course - Project 3</p>
      </div>
    </div>
  );
}
