import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../store/asyncPost";

function PostsPage() {
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.postsReducer)

  const getPostFunk = () => {
    dispatch(getPosts());
  };

  return (
    <div>
      <button onClick={getPostFunk}>get posts</button>
    </div>
  );
}

export default PostsPage;
