import { createSlice } from "@reduxjs/toolkit";
import { INotes } from "./interfaces/App/types";


const initialState: INotes = {
  notes: [],
  search: {
    notes: [],
    value: ""
  },
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
      const { note, index } = action.payload;

      state.notes.splice(index, 1, note);
    },
    removeNote: (state, action) => {
      const index = state.notes.findIndex((item) => item.id === action.payload);
      state.notes.splice(index, 1);
    },
    saveNotesAfterSorting: (state, action) => {
      state.notes = action.payload;
    },
    setSearch: (state, action) => {
      state.search = {
        ...state.search,
        ...action.payload
      };
    }
  },
});

export const {
  getNotes,
  saveNote,
  saveEditNote,
  removeNote,
  saveNotesAfterSorting,
  setSearch,
} = appSlice.actions;

export default appSlice.reducer;
