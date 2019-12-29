import React from "react";
import styled from "styled-components";
import { DOTS_HEIGHT } from "../constants";

const Background = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${DOTS_HEIGHT};
  bottom: 0;
`;

interface IProps {
  children: React.ReactNode;
}

function Dots({ children }: IProps) {
  return <Background>{children}</Background>;
}

export default Dots;
