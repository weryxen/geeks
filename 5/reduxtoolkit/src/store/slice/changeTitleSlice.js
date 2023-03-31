import { createSlice } from "@reduxjs/toolkit";

const changeTitleSlice = createSlice({
  name: "changeTitleSlice",
  initialState: {
    title: "Сделай меня гулем",
  },
  reducers: {
    changeTitle: (state, action) => {
      state.title = "Я гуль";
    },
    changeTitlePayload: (state, action) => {
      console.log(state);
      state.title = action.payload;
    },
  },
});
export const { changeTitle, changeTitlePayload } = changeTitleSlice.actions;

export default changeTitleSlice.reducer;
