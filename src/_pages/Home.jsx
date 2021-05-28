import React from "react";
import styled from "styled-components";

import Icon from "../_components/Icon";
import { H1 } from "../_components/_styles";

import Search from "../_components/Search";
import Users from "../_components/Users";


export default function Home() {
  return (
    <>
      <div>
        <Icon name="logo" />
        <H1 bold>Github Finder</H1>
      </div>
      <Search />
      <Users />
    </>
  );
}
