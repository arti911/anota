import { createSlice } from "@reduxjs/toolkit";
import { INotes } from "./interfaces/App/types";


const initialState: INotes = {
  notes: [],
}

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    getNotes: (state, action) => {
      state.notes = action.payload;
    },
    saveNote: (state, action) => {
      state.notes.push(action.payload);
    },
    saveEditNote: (state, action) => {
      state.notes.splice(action.payload.index, 1, action.payload.note);
    },
    removeNote: (state, action) => {
      const index = state.notes.findIndex((item) => item.id === action.payload);
      state.notes.splice(index, 1);
    },
    saveNotesAfterSorting: (state, action) => {
      state.notes = action.payload;
    }
  },
});

export const { getNotes, saveNote, saveEditNote, removeNote, saveNotesAfterSorting } = appSlice.actions;

export default appSlice.reducer;
