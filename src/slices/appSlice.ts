import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ITodo } from 'interfaces';

interface NoteProps {
  id: number;
  title: string;
  todos: ITodo[];
  isVisibleNote: boolean;
  // index?: number;
}

interface SearchProps {
  notes: NoteProps[];
  value: string;
}

interface AppState {
  notes: NoteProps[];
  search: SearchProps;
}

const initialState: AppState = {
  notes: [],
  search: {
    notes: [],
    value: '',
  },
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    getNotes: (state, action: PayloadAction<NoteProps[]>) => ({
      ...state,
      notes: action.payload,
    }),
    saveNote: (state, action: PayloadAction<NoteProps>) => {
      state.notes.push(action.payload);
    },
    saveEditNote: (
      state,
      action: PayloadAction<{
        idNote: number | null;
        note: NoteProps;
      }>
    ) => {
      const { note, idNote } = action.payload;

      const index = state.notes.findIndex((item) => item.id === idNote);

      state.notes.splice(index, 1, note);
    },
    removeNote: (state, action: PayloadAction<number>) => {
      const index = state.notes.findIndex((item) => item.id === action.payload);
      state.notes.splice(index, 1);
    },
    saveNotesAfterSorting: (state, action: PayloadAction<NoteProps[]>) => ({
      ...state,
      notes: action.payload,
    }),
    setSearch: (
      state,
      action: PayloadAction<{
        notes: NoteProps[];
        value: string;
      }>
    ) => ({
      ...state,
      search: action.payload,
    }),
  },
});

export const { getNotes, saveNote, saveEditNote, removeNote, saveNotesAfterSorting, setSearch } = appSlice.actions;

export default appSlice.reducer;
