import { IState, IAction } from "../types";
import { getMaxIndex } from "./";

function getTargetIndex(index: number, maxIndex: number) {
  if (index <= 0) return maxIndex - 1;
  if (index >= maxIndex) return 1;
  return index;
}

export default function getActions(state: IState, action: IAction) {
  return {
    updateCells: () => {
      const contents = action.contents!;
      const cells = [contents[contents.length - 1], ...contents, contents[0]];
      return { ...state, cells };
    },
    updateIndex: () => {
      const maxIndex = getMaxIndex(state);
      const targetIndex = getTargetIndex(action.index!, maxIndex);
      return { ...state, currentIndex: targetIndex };
    },
  };
}
