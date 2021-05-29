import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { fetchUsers, clearUSERS } from "../_github/actions";
import {Button, TextField} from "../_components/_styles";

const FormWrapper = styled.div`
    margin-bottom: 1.5rem;
`;

const Search = () => {
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(fetchUsers(text, "desc"));
    setText("");
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <FormWrapper>
      <form onSubmit={onSubmit} className="form">
        <TextField
          type="text"
          name="text"
          value={text}
          onChange={onChange}
          placeholder="Enter Github User..."
        />
        <Button type="submit" value="Search">
          Search
        </Button>
        <Button onClick={() => dispatch(clearUSERS())}>Clear</Button>
      </form>
    </FormWrapper>
  );
};

export default Search;
