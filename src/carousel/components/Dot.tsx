import React, { useContext } from "react";
import styled from "styled-components";
import { DOTS_HEIGHT } from "../constants";
import { Context } from "../store";
import getActions from "../actions/dot";

const CIRCLE_SIZE = "60%";

const Background = styled.div`
  position: relative;
  height: ${DOTS_HEIGHT};
  width: ${DOTS_HEIGHT};
`;

const Circle = styled.div<{ isActive: boolean; isOnClick: boolean }>`
  position: absolute;
  display: ${(props) => (props.isActive ? "block" : "none")};
  top: 50%;
  left: 50%;
  width: ${CIRCLE_SIZE};
  height: ${CIRCLE_SIZE};
  transform: translate(-50%, -50%);
  border-radius: 50%;
  box-sizing: border-box;
  border: 1px solid gray;
  background-color: ${(props) => (props.isOnClick ? "gray" : "white")};
  cursor: pointer;
`;

interface IProps {
  index: number;
}

function Dot({ index }: IProps) {
  const { handleClick, isActive, isOnClick } = getActions(
    useContext(Context),
    index,
  );

  return (
    <Background>
      <Circle
        onClick={handleClick}
        isOnClick={isOnClick()}
        isActive={isActive()}
      />
    </Background>
  );
}

export default Dot;
