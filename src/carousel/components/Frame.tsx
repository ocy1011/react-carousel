import React from "react";
import styled from "styled-components";
import { FRAME_WIDTH } from "../constants";

const Background = styled.div`
  position: relative;
  width: ${FRAME_WIDTH};
  height: 100%;
  overflow: hidden;
`;

interface IProps {
  children: React.ReactNode;
}

function Frame({ children }: IProps) {
  return <Background>{children}</Background>;
}

export default Frame;
