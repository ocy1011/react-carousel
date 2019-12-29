import React, { createContext, useReducer, Dispatch } from "react";
import { initialState, reducer } from "../reducer";
import { IState, IAction } from "../types";

export const Context = createContext<{
  state: IState;
  dispatch: Dispatch<IAction>;
}>({
  state: initialState,
  dispatch: () => {},
});

interface IProps {
  children: React.ReactNode;
}

function Provider({ children }: IProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = {
    state,
    dispatch,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default Provider;
