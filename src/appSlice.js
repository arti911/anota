import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: [],
  reducers: {
    getNotes: (state, action) => {
      return action.payload;
    },
    saveNote: (state, action) => {
      state.push(action.payload);
    },
    saveEditNote: (state, action) => {
      state.splice(action.payload.index, 1, action.payload.note);
    },
    removeNote: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { getNotes, saveNote, saveEditNote, removeNote } = appSlice.actions;

export default appSlice.reducer;
