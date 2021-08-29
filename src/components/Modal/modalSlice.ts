import { createSlice } from "@reduxjs/toolkit";

import { IState } from "../../interfaces/Modal/types";

const initialState: IState = {
  visibleModal: false,
  title: "Новая заметка",
  currentNoteIndex: null
}

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    onToggleShow: (state, action) => {
      state.visibleModal = action.payload;
    },
    setTitleEdit: (state, action) => {
      state.title = action.payload;
    },
    setCurrentNoteIndex: (state, action) => {
      state.currentNoteIndex = action.payload;
    }
  }
});

export const {
  onToggleShow,
  setTitleEdit,
  setCurrentNoteIndex
} = modalSlice.actions;

export default modalSlice.reducer;
