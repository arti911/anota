import { createSlice } from "@reduxjs/toolkit";

import { IState } from "../../interfaces/Modal/types";

const initialState: IState = {
  visibleModal: false,
  title: "Новая заметка",
  currentNoteId: null,
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
    setCurrentNoteId: (state, action) => {
      state.currentNoteId = action.payload;
    }
  }
});

export const {
  onToggleShow,
  setTitleEdit,
  setCurrentNoteId
} = modalSlice.actions;

export default modalSlice.reducer;
