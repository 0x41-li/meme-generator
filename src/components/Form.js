import React from "react";

// scss
import "../scss/Form.scss";

export default function Form(props) {
  return (
    <div className="form-wrapper">
      <form className="form-wrapper__form">
        {/* both inputs */}
        <div className="form-wrapper__text-inputs">
          <input
            type="text"
            className="form-wrapper__text-input"
            name="topText"
            onChange={props.handleFormChange}
            placeholder="Top Text"
            value={props.formData.topText}
          />
          <input
            type="text"
            className="form-wrapper__text-input"
            name="bottomText"
            onChange={props.handleFormChange}
            placeholder="Bottom Text"
            value={props.formData.bottomText}
          />
        </div>

        {/* Form Button  */}
        <div className="form-wrapper__form-button-wrapper">
          <button onClick={props.handleFormSubmit} type="button" className="form-wrapper__form-button">
            Get a new meme image
          </button>
        </div>
      </form>
    </div>
  );
}
