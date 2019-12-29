import React, { useContext, useRef } from "react";
import styled, { Keyframes } from "styled-components";
import { Context } from "../store";
import { DOTS_HEIGHT } from "../constants";
import getActions from "../actions/slider";
import { SLIDER_SPEED } from "../constants";

const Background = styled.div<{
  width: string;
  animation: Keyframes | null;
}>`
  position: relative;
  display: flex;
  left: -100%;
  top: 50%;
  transform: translateY(-50%);
  height: calc(100% - ${DOTS_HEIGHT} * 2);
  width: ${(props) => props.width};
  animation-name: ${(props) => props.animation};
  animation-duration: ${SLIDER_SPEED};
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
`;

interface IProps {
  children: React.ReactNode;
}

function Slider({ children }: IProps) {
  const { state } = useContext(Context);
  const { getWidth, getAnimation } = getActions(state);
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Background ref={ref} width={getWidth()} animation={getAnimation(ref)}>
      {children}
    </Background>
  );
}

export default Slider;
