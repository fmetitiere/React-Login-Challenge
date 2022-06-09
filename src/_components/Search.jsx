import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { fetchUsers, clearUSERS } from "../_github/actions";
import { Button, TextField, RadioWrapper } from "../_components/_styles";

const FormWrapper = styled.div`
  margin-bottom: 1.5rem;
  width: 100%;
  .container {
    display: flex;
  }
  @media (max-width: 767px) {
    width: 100%;

    .container {
      input {
        margin-bottom: 1rem;
      }
      flex-direction: column;
      margin-bottom: 1rem;
    }
    .ButtonWrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 0.5rem;
    }
  }
`;

const Search = () => {
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const onSubmit = (e) => {
    const orderValue = document.getElementsByName("order");

    let finalValue;

    for (var i = 0, length = orderValue.length; i < length; i++) {
      if (orderValue[i].checked) {
        finalValue = orderValue[i].value;
      }
    }

    e.preventDefault();

    dispatch(fetchUsers(text, finalValue));
    setText("");
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <FormWrapper>
      <form onSubmit={onSubmit} className="form">
        <div className="container">
          <TextField
            type="text"
            name="text"
            value={text}
            onChange={onChange}
            placeholder="Enter Github User..."
            required
          />
          <div className="ButtonWrapper">
            <Button type="submit" value="Search">
              Search
            </Button>
            <Button
              type="button"
              secondary
              onClick={() => dispatch(clearUSERS())}
            >
              Clear
            </Button>
          </div>
        </div>
        <RadioWrapper>
          <div>
            <input
              type="radio"
              id="order"
              name="order"
              value="desc"
            />
            <label for="asc">Desc</label>
          </div>
          <div>
            <input type="radio" id="order" name="order" value="asc" />
            <label for="asc">Asc</label>
          </div>
        </RadioWrapper>
      </form>
    </FormWrapper>
  );
};

export default Search;
