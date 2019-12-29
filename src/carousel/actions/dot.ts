import { IContext } from "../types";
import { updateIndex, getCurrentIndex, getMaxIndex } from "./";

export default function getActions(
  { state, dispatch }: IContext,
  index: number,
) {
  return {
    handleClick: () => updateIndex(index, dispatch),
    isActive: () => {
      const maxIndex = getMaxIndex(state);
      if (index === 0 || index === maxIndex) return false;
      return true;
    },
    isOnClick: () => {
      const currentIndex = getCurrentIndex(state);
      const maxIndex = getMaxIndex(state);
      if (index === currentIndex) return true;
      if (index === 0 && maxIndex === currentIndex) return true;
      return false;
    },
  };
}
