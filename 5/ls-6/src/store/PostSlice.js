import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPost = createAsyncThunk(
  "getPost",
  async function (data, { dispatch, rejectWithValue }) {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    dispatch(postInfo(posts))
  }
);

const postSlice = createSlice({
    name: "postSlice",
    initialState: {
        post: []
    },
    reducers: { 
        postInfo: (state, action) => {
            state.post = action.payload.slice( 0, 10 )
        }
    }
})

export const {postInfo} = postSlice.actions


export default postSlice.reducer