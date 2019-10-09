import React from "react";
import "./App.css";
import Hero from "./components/hero";
import Data from "./components/data";

function App() {
  return (
    <div className="App">
      <h1>
        THE MAJESTY OF SPACE!!!
      </h1>
      <div className="imgContainer">
        <Hero />
        <Data />
      </div>
    </div>
  );
}

export default App;
