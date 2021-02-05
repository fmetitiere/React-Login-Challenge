import React from "react";

import { HomeMenuData } from "../../../_messages";
import { Navbar, NavbarContainer, Content } from "./styles";
import { LinkComp } from "../../../_components/_styles";
import Icon from "../../Icon";

export default function WebLayout({ children }) {
  return (
    <>
      <Navbar>
        <NavbarContainer>
          <Icon name="logo" />
          <div>
            <LinkComp to="google.com">Home</LinkComp>
            <LinkComp to="google.com">{HomeMenuData.menuItem1}</LinkComp>
            <LinkComp to="google.com">{HomeMenuData.menuItem2}</LinkComp>
          </div>
        </NavbarContainer>
      </Navbar>
      <Content>{children}</Content>
    </>
  );
}
