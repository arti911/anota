import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IState } from "../interfaces/modal.interface";

const initialState: IState = {
  visibleModal: false,
  title: "Новая заметка",
  currentNoteId: null,
}

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    onToggleShow: (state, action: PayloadAction<boolean>) => {
      state.visibleModal = action.payload;
    },
    setTitleEdit: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setCurrentNoteId: (state, action: PayloadAction<number | null>) => {
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
