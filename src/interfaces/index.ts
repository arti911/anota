export interface ITodo {
  id: number;
  title: string;
  isCheck: boolean;
}

export interface ITodoCurrent {
  todoTitle: string;
  currentTodo: ITodo | null;
}
