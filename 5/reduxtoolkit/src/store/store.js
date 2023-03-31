import { configureStore } from "@reduxjs/toolkit";
import changeTitleReducer from "./slice/changeTitleSlice";


export const store = configureStore({
  reducer: {
    changeTitleReducer,
  },
});
