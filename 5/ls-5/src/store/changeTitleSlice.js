import { createSlice } from "@reduxjs/toolkit";

const changeTitleSlice = createSlice({
  name: "changeTitleSlice",
  initialState: {
    title: "Сделай меня гулем",
  },
  reducers: {
    changeTitle: (state, action) => {
      state.title  = "Я гуль";
    },
  },
});
export const { changeTitle } = changeTitleSlice.actions;
export default changeTitleSlice.reducer;
 