import React from "react";
import styled from "styled-components";

import Icon from "../_components/Icon";
import { H1 } from "../_components/_styles";

import Search from "../_components/Search";
import Users from "../_components/Users";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  svg{
    margin-right: 1rem;   
  }
`;

export default function Home() {
  return (
    <>
      <LogoWrapper>
        <Icon name="logo" />
        <H1 bold>Github Finder</H1>
      </LogoWrapper>
      <Search />
      <Users />
    </>
  );
}
