import { UPDATE_CELLS, UPDATE_INDEX } from "../constants/actionTypes";
import getActions from "../actions/reducer";
import { IState, IAction } from "../types";

const initialState: IState = {
  currentIndex: 1,
  cells: [],
};

function reducer(state: IState, action: IAction) {
  const { updateCells, updateIndex } = getActions(state, action);
  switch (action.type) {
    case UPDATE_CELLS:
      return updateCells();
    case UPDATE_INDEX:
      return updateIndex();
    default:
      return state;
  }
}

export { initialState, reducer };
