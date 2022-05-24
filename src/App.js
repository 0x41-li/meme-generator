import React, { useState, useEffect } from "react";

// components
import Header from "./components/Header";
import Form from "./components/Form";
import Meme from "./components/Meme";

// scss
import "./scss/app.scss";

export default function App() {
  const [formData, setFormData] = useState({
    topText: "",
    bottomText: "",
  });

  const [memes, setMemes] = useState({});
  const [memeImage, setMemeImage] = useState("");

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        setMemes(data.data.memes);
      });
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * memes.length);
    const randomImageUrl = memes[randomNumber].url;
    setMemeImage(randomImageUrl);
  }

  function handleFormChange(e) {
    const target = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [target.name]: target.value,
    }));
  }

  function handleFormSubmit() {
    getMemeImage();
  }
  return (
    <>
      <Header />
      <Form
        handleFormChange={handleFormChange}
        handleFormSubmit={handleFormSubmit}
        formData={formData}
      />
      <Meme
        topText={formData.topText}
        bottomText={formData.bottomText}
        memeImage={memeImage}
      />
    </>
  );
}
