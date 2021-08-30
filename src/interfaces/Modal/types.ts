export interface IState {
  visibleModal: boolean;
  title: string;
  currentNoteId: number | null;
}

export interface ITitle {
  title: string;
  setTitleHandler: (title: string) => void;
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

export interface ISortTodo extends ITodoEdit {
  todo: ITodo;
  index: number;
}

export interface ITodoCurrent extends ITodoEdit {
  todoTitle: string;
  currentTodo: ITodo | null;
}

export interface ITodoEdit {
  itemRef?: any;
  setTodoTitleHandler: (title: string) => void;
  setCurrentTodoHandler: (value: null | ITodo) => void;
}