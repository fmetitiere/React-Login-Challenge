import React from "react";
import styled from "styled-components";

import { Button, LinkComp, TextField } from "../_components/_styles";
import Icon from "./Icon";

const FormWrapper = styled.div`
  margin-bottom: 1.5rem;
  width: 100%;
  .input-container {
    display: flex;
    border-bottom: 1px solid ${(props) => props.theme.fontColor};
    padding: 1rem;
    margin-bottom: 1rem;
    svg {
      margin-right: 0.5rem;
    }
  }
  .fogot-password {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
  }
  @media (max-width: 767px) {
    width: 100%;

    .input-container {
      margin-bottom: 1rem;
    }
    .ButtonWrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 0.5rem;
    }
  }
`;

const LoginForm = () => {
  return (
    <FormWrapper>
      <form className="form">
        <div className="input-container">
          <Icon name="user" />
          <TextField
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
        </div>
        <div className="input-container">
          <Icon name="pass" />
          <TextField
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="fogot-password">
          <LinkComp to="/">Forgot Password</LinkComp>
        </div>

        <Button type="submit" value="Search">
          Log in
        </Button>
      </form>
    </FormWrapper>
  );
};

export default LoginForm;
