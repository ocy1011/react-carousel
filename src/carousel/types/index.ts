import { Dispatch } from "react";

export interface IState {
  currentIndex: number;
  cells?: React.ReactNode[];
}

export interface IAction {
  type: string;
  index?: number;
  contents?: React.ReactNode[];
}

export interface IContext {
  state: IState;
  dispatch: Dispatch<IAction>;
}
