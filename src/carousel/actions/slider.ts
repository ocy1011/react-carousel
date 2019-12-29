import { RefObject } from "react";
import { keyframes } from "styled-components";
import { IState } from "../types";

import { getCurrentIndex, getMaxIndex, getCells } from "./";

function getLeft(index: number) {
  return `-${index * 100}%`;
}

function getCellWidth(width: string, cellsLength: number) {
  const [widthNumber] = width.split("px");
  return +widthNumber / cellsLength;
}

function getNearestIndex(left: string, cellWidth: number) {
  if (cellWidth === 0) return 0;
  const [leftNumber] = left.split("px");
  const value = Math.abs(+leftNumber / cellWidth);
  return Math.round(value);
}

function getEndPoint(state: IState, width: string, left: string) {
  const currentIndex = getCurrentIndex(state);
  const maxIndex = getMaxIndex(state);
  const cells = getCells(state);
  const cellsLength = cells.length;
  const cellWidth = getCellWidth(width, cellsLength);
  const nearestIndex = getNearestIndex(left, cellWidth);
  const commonDistance = Math.abs(nearestIndex - currentIndex);
  const rotateDistance = maxIndex - commonDistance - 1;

  if (commonDistance <= rotateDistance) return "";
  const isLeftDirection = currentIndex > nearestIndex;
  const percentage =
    ((isLeftDirection ? nearestIndex : maxIndex - nearestIndex) /
      rotateDistance) *
    100;
  const startIndex = isLeftDirection ? 0 : maxIndex;
  const endIndex = isLeftDirection ? maxIndex - 1 : 1;
  return `${percentage - 0.0001}% {
    left: ${getLeft(startIndex)};
  }
  ${percentage}% {
    left: ${getLeft(endIndex)};
  }
  `;
}

export default function getActions(state: IState) {
  return {
    getWidth: () => `${getCells(state).length * 100}%`,
    getAnimation: (ref: RefObject<HTMLDivElement>) => {
      const currentIndex = getCurrentIndex(state);
      const { current } = ref;
      if (!current) return null;
      const { left, width } = window.getComputedStyle(current);
      const Animation = keyframes`
        from {
          left: ${left};
        }
        ${getEndPoint(state, width, left)}
        to {
          left: ${getLeft(currentIndex)};
        }
      `;
      return Animation;
    },
  };
}
