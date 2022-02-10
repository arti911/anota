import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "note",
  initialState: {
    isVisibleNote: true,
  },
  reducers: {
    setVisibleNote: (state, action: PayloadAction<boolean | undefined>) => {
      state.isVisibleNote = (action.payload === undefined) ? true : action.payload;
    },
  },
});

export const { setVisibleNote } = noteSlice.actions;

export default noteSlice.reducer;
