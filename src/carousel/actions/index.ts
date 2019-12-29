import { Dispatch } from "react";
import { IState, IAction } from "../types";
import { UPDATE_CELLS, UPDATE_INDEX } from "../constants/actionTypes";

export function getCurrentIndex(state: IState) {
  return state.currentIndex;
}

export function getCells(state: IState) {
  return state.cells!;
}

export function getMaxIndex(state: IState) {
  const cells = getCells(state);
  return Math.max(cells!.length - 1, 0);
}

export function updateCells(
  contents: React.ReactNode[],
  dispatch: Dispatch<IAction>,
) {
  dispatch({ type: UPDATE_CELLS, contents });
}

export function updateIndex(index: number, dispatch: Dispatch<IAction>) {
  dispatch({ type: UPDATE_INDEX, index });
}
