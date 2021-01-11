import React from "react";

import { WebMenuData } from "../../../_messages";
import { Navbar, NavbarContainer, Content } from "./styles";
import Icon from '../../Icon';

export default function WebLayout({ children }) {
  return (
    <>
      <Navbar>
        <NavbarContainer>
          <Icon name="logo"/>
          <div>
            <a href="google.com">Home</a>
            <a href="google.com">{WebMenuData.menuItem1}</a>
            <a href="google.com">{WebMenuData.menuItem2}</a>
          </div>
        </NavbarContainer>
      </Navbar>
      <Content>{children}</Content>
    </>
  );
}
