import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTitle, changeTitlePayload } from "../store/slice/changeTitleSlice";

const ChangeTitle = () => {
  const { title  } = useSelector((state) => state.changeTitleReducer);

  const dispatch = useDispatch();

  const changeTitleFunk = () => {
    dispatch(changeTitle());
  };

  const changeTitlePayloadFunk = () => {
    dispatch(changeTitlePayload("Я не буду гулем"));
  };

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={changeTitleFunk}>change title</button>
      <button onClick={changeTitlePayloadFunk}>change title payload</button>
    </div>
  );
};

export default ChangeTitle;
