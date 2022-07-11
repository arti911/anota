import { configureStore } from "@reduxjs/toolkit";

import appSlice from "../slices/appSlice";
import modalSlice from "../slices/modalSlice";
import todoSlice from "../slices/todoSlice";
import noteSlice from "../slices/noteSlice";

export const store = configureStore({
  reducer: {
    anota: appSlice,
    modal: modalSlice,
    todo: todoSlice,
    note: noteSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
