import React from "react";

// scss
import "../scss/Form.scss";

export default function Form() {
  function handleFormChange() {
    console.log(1);
  }
  return (
    <div className="form-wrapper">
      <form className="form-wrapper__form">
        {/* both inputs */}
        <div className="form-wrapper__text-inputs">
          <input
            type="text"
            className="form-wrapper__text-input"
            name="topText"
            onChange={handleFormChange}
            placeholder="Top Text"
          />
          <input
            type="text"
            className="form-wrapper__text-input"
            name="bottomText"
            onChange={handleFormChange}
            placeholder="Bottom Text"
          />
        </div>

        {/* Form Button  */}
        <div className="form-wrapper__form-button-wrapper">
          <button className="form-wrapper__form-button">
            Get a new meme image 🖼
          </button>
        </div>
      </form>
    </div>
  );
}
