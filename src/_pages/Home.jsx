import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { showUsername, listUsers } from "../githubActions";
import { H2, P } from "../_components/_styles";

export default function Home() {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();

  let usersList = count.users.map((e) => {
    return <div>{e.login} {e.id} {e.type}</div>;
  });

  const onSubmit = (e) => {
    e.preventDefault();

    const option = document.getElementById("username").value;
    dispatch(showUsername(option));
  };

  return (
    <div>
      <div>
        <H2>{count.userName}</H2>

        <form onSubmit={onSubmit} className="form">
          <input
            type="text"
            id="username"
            name="name"
            required
            minlength="4"
            maxlength="8"
            size="10"
          />
          <input
            type="submit"
            value="Update"
            className="btn btn-dark btn-block"
          />
        </form>
        <button onClick={() => dispatch(listUsers())}>List Users</button>
        <P>{usersList}</P>
      </div>
    </div>
  );
}
