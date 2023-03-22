import { configureStore } from '@reduxjs/toolkit';

import appSlice from 'slices/appSlice';
import modalSlice from 'slices/modalSlice';
import noteSlice from 'slices/noteSlice';
import todoSlice from 'slices/todoSlice';

export const store = configureStore({
  reducer: {
    anota: appSlice,
    modal: modalSlice,
    todo: todoSlice,
    note: noteSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
