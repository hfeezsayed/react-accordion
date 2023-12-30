import { useState } from "react";
import "./App.css";
import Accordion from "./Accordion";

function App() {
  const accordionData = [
    {
      title: "Section-1",
      content: `Rrow itself, let it be sorrow; let him love it; let him pursue it, ishing for its acquisitiendum. Because he will ab hold, uniess but through concer, and also of those who resist. Now a pure snore disturbeded sum dust. He ejjnoyes, in order that somewon, also with a severe one, unless of life`,
    },
    {
      title: "Section-2",
      content: `Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit.`,
    },
    {
      title: "Section-3",
      content: `Rrow itself, let it be sorrow; let him love it; let him pursue it, ishing for its acquisitiendum. Because he will ab hold, uniess but through concer, and also of those who resist. Now a pure snore disturbeded sum dust. He ejjnoyes, in order that somewon, also with a severe one, unless of life`,
    },
  ];
  return (
    <div className="container my-3">
      <h3 className="mb-3">Create Accordian in the react</h3>
      <Accordion sections={accordionData} />
    </div>
  );
}

export default App;
