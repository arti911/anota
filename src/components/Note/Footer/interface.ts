import { ITodo } from "../../../interfaces/modal.interface";

export interface IFooterNote {
  todos: ITodo[];
  isVisibleNote: boolean;
  clickHandler: () => void;
}
