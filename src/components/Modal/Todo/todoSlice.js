import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    isEdit: false
  },
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
    cleatTodos: (state, action) => {
      state.todos.splice(0, state.todos.length);
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
  cleatTodos
} = todoSlice.actions;

export default todoSlice.reducer;
