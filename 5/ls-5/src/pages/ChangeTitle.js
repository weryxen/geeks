import React from "react";
import { useDispatch, useSelector } from "react-redux";
import changeTitleSlice from "../store/changeTitleSlice";

const ChangeTitle = () => {
  const dispatch = useDispatch();
  const { title } = useSelector((state) => state.changeTitleReducer);

  const changeTitleFunk = () => {
    dispatch(changeTitleSlice());
  };

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={changeTitleFunk}>changeTitle</button>
    </div>
  );
};

export default ChangeTitle;
