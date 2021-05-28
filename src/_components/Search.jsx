import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers, clearUSERS } from "../_github/actions";

const Search = () => {
  
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(fetchUsers(text));
    setText("");
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          value={text}
          onChange={onChange}
          placeholder="Search Users..."
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
        <button onClick={() => dispatch(clearUSERS())}>clear</button>
      </form>
     

    </div>
  );
};

export default Search;
