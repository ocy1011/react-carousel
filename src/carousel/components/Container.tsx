import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { Context } from "../store";
import Frame from "./Frame";
import Slider from "./Slider";
import Dots from "./Dots";
import Button from "./Button";
import Cell from "./Cell";
import Dot from "./Dot";
import { CONTAINER_HEIGHT_RATE } from "../constants";
import getActions from "../actions/container";
import Arrow from "./Arrow";

const Background = styled.div`
  position: relative;
  width: 0;
  height: 0;
  padding: calc(50% * ${CONTAINER_HEIGHT_RATE}) 50%;
`;

const Inside = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  box-sizing: border-box;
  border: 1px solid gray;
`;

interface IProps {
  contents: React.ReactNode[];
}

function Container({ contents }: IProps) {
  const {
    getCells,
    updateCells,
    moveLeft,
    moveRight,
    isButtonActive,
  } = getActions(useContext(Context));

  const cells = getCells();

  useEffect(updateCells.bind(null, contents), [contents]);

  return (
    <Background>
      <Inside>
        <Button onClick={moveLeft} isButtonActive={isButtonActive()}>
          <Arrow isLeft={true} />
        </Button>
        <Frame>
          <Slider>
            {cells.map((cell, index) => (
              <Cell key={index}>{cell}</Cell>
            ))}
          </Slider>
          <Dots>
            {cells.map((dot, index) => (
              <Dot key={index} index={index} />
            ))}
          </Dots>
        </Frame>
        <Button onClick={moveRight} isButtonActive={isButtonActive()}>
          <Arrow isLeft={false} />
        </Button>
      </Inside>
    </Background>
  );
}

export default Container;
