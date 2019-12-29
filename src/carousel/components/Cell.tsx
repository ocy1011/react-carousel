import React from "react";
import styled from "styled-components";

const Background = styled.div`
  position: relative;
  flex: 1;
  box-sizing: border-box;
  overflow: hidden;
`;

interface IProps {
  children: React.ReactNode;
}

function Cell({ children }: IProps) {
  return <Background>{children}</Background>;
}

export default Cell;
