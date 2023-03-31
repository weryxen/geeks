import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPost } from "../store/PostSlice";

const PostPage = () => {
  const dispatch = useDispatch()

  useEffect( () => {
    dispatch(getPost())
})
  return (
    <div>
      <h1>Post</h1>
    </div>
  );
};

export default PostPage;
