import { configureStore } from "@reduxjs/toolkit";
import changeTitleReducer from "./changeTitleSlice";

export const store = configureStore({
  reducer: {
    changeTitleReducer
  },
});
