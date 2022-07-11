import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IApp } from "../interfaces/app.interface";
import { INote } from "../components/Note/interface";

const initialState: IApp = {
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
    getNotes: (state, action: PayloadAction<INote[]>) => {
      state.notes = action.payload;
    },
    saveNote: (state, action: PayloadAction<INote>) => {
      state.notes.push(action.payload);
    },
    saveEditNote: (state, action: PayloadAction<{
      idNote: number | null;
      note: INote;
    }>) => {
      const { note, idNote } = action.payload;

      const index = state.notes.findIndex((item) => item.id === idNote);

      state.notes.splice(index, 1, note);
    },
    removeNote: (state, action: PayloadAction<number>) => {
      const index = state.notes.findIndex((item) => item.id === action.payload);
      state.notes.splice(index, 1);
    },
    saveNotesAfterSorting: (state, action: PayloadAction<INote[]>) => {
      state.notes = action.payload;
    },
    setSearch: (state, action: PayloadAction<{
      notes: INote[];
      value: string;
    }>) => {
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
