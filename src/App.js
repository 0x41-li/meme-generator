import React from "react";

// components
import Header from "./components/Header";
import Form from "./components/Form";
import Meme from "./components/Meme";

// scss
import "./scss/app.scss";

export default function App() {
  return (
    <>
      <Header />
      <Form />
      <Meme />
    </>
  );
}
