import React from "react";
import styled, { css } from "styled-components";

const LINE_WIDTH_PERCENT = 50;
const LINE_HEIGHT_PERCENT = 12.5;

const Background = styled.div<{ scaleX: number }>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transform: scaleX(${(props) => props.scaleX});
`;

const LineStyle = css`
  position: absolute;
  width: ${LINE_WIDTH_PERCENT}%;
  height: ${LINE_HEIGHT_PERCENT}%;
  border-radius: 10000px;
  background-color: black;
  transform-origin: ${(LINE_HEIGHT_PERCENT * 50) / LINE_WIDTH_PERCENT}% 50%;
`;

const UpLine = styled.div`
  ${LineStyle};
  transform: rotateZ(-45deg);
`;

const DownLine = styled.div`
  ${LineStyle};
  transform: rotateZ(45deg);
`;

interface IProps {
  isLeft: boolean;
}

function Arrow({ isLeft }: IProps) {
  const scaleX = isLeft ? 1 : -1;
  return (
    <Background scaleX={scaleX}>
      <UpLine />
      <DownLine />
    </Background>
  );
}

export default Arrow;
