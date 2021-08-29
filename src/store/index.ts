import { configureStore } from "@reduxjs/toolkit";

import modalSlice from "../components/Modal/modalSlice";
import appSlice from "../appSlice";
import todoSlice from "../components/Modal/Todo/todoSlice";
import noteSlice from "../components/Note/noteSlice";

const store = configureStore({
  reducer: {
    anota: appSlice,
    modal: modalSlice,
    todo: todoSlice,
    note: noteSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;
