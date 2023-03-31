import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk(
  "getPosts",
  async function (userInfo, { dispatch, rejectWithValue }) {
    try {
      const options = {
        method: "POST",
        Headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(userInfo),
      };
      const respone = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        options
      );
      if (respone.status >= 200 && respone.status <= 204) {
        alert("user registered");
      } else if (respone.status === 404) {
        throw Error("not found");
      }
    } catch (e) {
        return rejectWithValue(e.message)
    }
  }
);

const postSlice = createSlice({
  name: "postSlice",
  initialState: {
    posts: [],
  },
  reducer: {
    postData: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const { postData } = postSlice.actions;

export default postSlice.reducer;
