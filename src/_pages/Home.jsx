import React from "react";
import styled from "styled-components";

import LoginForm from "../_components/LoginForm";
import Icon from "../_components/Icon";
import { H1 } from "../_components/_styles";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  svg {
    margin-right: 1rem;
  }
`;

export default function Home() {
  return (
    <>
      <LogoWrapper>
        <Icon name="logo" />
        <H1 bold>Login</H1>
      </LogoWrapper>
      <LoginForm />
    </>
  );
}
