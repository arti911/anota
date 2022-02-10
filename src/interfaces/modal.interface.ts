export interface IState {
  visibleModal: boolean;
  title: string;
  currentNoteId: number | null;
}

export interface ITodoState {
  todos: Array<ITodo>;
  isEdit: boolean;
}

export interface ITodo {
  id: number;
  title: string;
  isCheck: boolean;
}

export interface ITodoCurrent extends ITodoEdit {
  todoTitle: string;
  currentTodo: ITodo | null;
}

export interface ITodoEdit {
  itemRef?: any;
  handlers: any;
}