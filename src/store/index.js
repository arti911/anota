import { configureStore } from "@reduxjs/toolkit";

import modalSlice from "../components/Modal/modalSlice";
import appSlice from "../appSlice";
import todoSlice from "../components/Modal/Todo/todoSlice";

export default configureStore({
  reducer: {
    anota: appSlice,
    modal: modalSlice,
    todo: todoSlice,
  },
});
