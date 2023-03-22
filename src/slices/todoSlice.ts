import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ITodo } from 'interfaces';

interface TodosState {
  todos: ITodo[];
  isEdit: boolean;
}

const initialState: TodosState = {
  todos: [],
  isEdit: false,
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    saveTodo: (state, action: PayloadAction<ITodo>) => {
      state.todos.push(action.payload);
    },
    checkTodo: (
      state,
      action: PayloadAction<{
        index: number;
        todo: ITodo;
      }>
    ) => {
      const { index, todo } = action.payload;

      state.todos.splice(index, 1, todo);
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos.splice(action.payload, 1);
    },
    toggleEdit: (state, action: PayloadAction<boolean>) => ({
      ...state,
      isEdit: action.payload,
    }),
    saveEditTodo: (state: TodosState, action: PayloadAction<ITodo>) => {
      const itemIndex = state.todos.findIndex((item) => item.id === action.payload.id);

      state.todos.splice(itemIndex, 1, action.payload);
    },
    editTodos: (state, action: PayloadAction<ITodo[]>) => ({
      ...state,
      todos: state.todos.concat(action.payload),
    }),
    cleatTodos: (state) => {
      state.todos.splice(0, state.todos.length);
    },
    sortTodos: (state, action: PayloadAction<ITodo[]>) => ({
      ...state,
      todos: action.payload,
    }),
  },
});

export const { saveTodo, checkTodo, removeTodo, toggleEdit, saveEditTodo, editTodos, cleatTodos, sortTodos } =
  todoSlice.actions;

export default todoSlice.reducer;
