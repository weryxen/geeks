import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../store/asyncPost";

const UsersPage = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
  });

  const getInfoUser = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const register = () => {
    dispatch(getPosts(form));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="name"
        name="name"
        onChange={getInfoUser}
      />
      <input
        type="text"
        placeholder="username"
        name="username"
        onChange={getInfoUser}
      />
      <input
        type="text"
        placeholder="email"
        name="email"
        onChange={getInfoUser}
      />
      <button onClick={register}>register</button>
    </div>
  );
};

export default UsersPage;
