import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "note",
  initialState: {
    isVisibleNote: true,
  },
  reducers: {
    setVisibleNote: (state, action) => {
      state.isVisibleNote = (action.payload === undefined) ? true : action.payload;
    },
  },
});

export const { setVisibleNote } = noteSlice.actions;

export default noteSlice.reducer;
