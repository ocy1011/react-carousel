import { updateIndex, getCurrentIndex, getCells } from "./";
import { UPDATE_CELLS } from "../constants/actionTypes";
import { IContext } from "../types";

export default function getActions({ state, dispatch }: IContext) {
  const currentIndex = getCurrentIndex(state);
  return {
    updateCells: (contents: React.ReactNode[]) => {
      dispatch({ type: UPDATE_CELLS, contents });
    },
    moveLeft: () => updateIndex(currentIndex - 1, dispatch),
    moveRight: () => updateIndex(currentIndex + 1, dispatch),
    getCells: () => getCells(state),
    isButtonActive: () => getCells(state).length > 4,
  };
}
