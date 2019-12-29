import React from "react";
import styled from "styled-components";
import Carousel from "./carousel";

const Background = styled.div`
  width: 100%;
  height: 100vh;
`;

function App() {
  return (
    <Background>
      <Carousel />
    </Background>
  );
}

export default App;
