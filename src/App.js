import React from "react";
import "./App.css";
import Hero from "./components/hero";
import Data from "./components/data";
import styled from "styled-components";
const ImgDiv = styled.div`
    max-width: 95%;
    margin: 0 auto;
`;
const TitleH1 = styled.h1`
    color: #FFF;
`;
function App() {
  return (
    <div className="App">
      <TitleH1>
        THE MAJESTY OF SPACE!!!
      </TitleH1>
      <ImgDiv>
        <Hero />
        <Data />
      </ImgDiv>
    </div>
  );
}

export default App;
