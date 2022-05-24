import React from "react";

// scss
import "../scss/meme.scss";

export default function Meme() {
  return (
    <div className="meme-wrapper">
      <p className="meme-wrapper__top-text">Top Text</p>
      <img
        src="https://images.theconversation.com/files/38926/original/5cwx89t4-1389586191.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
        alt=""
      />
      <p className="meme-wrapper__bottom-text">Bottom Text</p>
    </div>
  );
}
