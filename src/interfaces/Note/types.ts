import { ITodo } from "../Modal/types";

export interface INote {
  id: number;
  title: string;
  todos: Array<ITodo>;
  isVisibleNote: boolean;
  index?: number;
}

export interface ISort {
  oldIndex: number;
  newIndex: number;
}
