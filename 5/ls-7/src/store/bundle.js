import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./asyncPost";

export const store = configureStore({
    reducer: {
        postsReducer
    }
})