import { createSlice } from "@reduxjs/toolkit";
import { ITodoState } from "../../../interfaces/Modal/types";

const initialState: ITodoState = {
  todos: [],
  isEdit: false
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    checkTodo: (state, action) => {
      const { index, todo } = action.payload;

      state.todos.splice(index, 1, todo);
    },
    removeTodo: (state, action) => {
      state.todos.splice(action.payload, 1);
    },
    toggleEdit: (state, action) => {
      state.isEdit = action.payload;
    },
    saveEditTodo: (state, action) => {
      const itemIndex = state.todos.findIndex(
        (item) => item.id === action.payload.id
      );

      state.todos.splice(itemIndex, 1, action.payload);
    },
    editTodos: (state, action) => {
      state.todos = state.todos.concat(action.payload);
    },
    cleatTodos: (state) => {
      state.todos.splice(0, state.todos.length);
    },
    sortTodos: (state, action) => {
      state.todos = action.payload;
    }
  }
});

export const {
  saveTodo,
  checkTodo,
  removeTodo,
  toggleEdit,
  saveEditTodo,
  editTodos,
  cleatTodos,
  sortTodos
} = todoSlice.actions;

export default todoSlice.reducer;
