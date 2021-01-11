import React from "react";

import { HomeData } from "../../../_messages";
import { Navbar, NavbarContainer, Content } from "./styles";

export default function WebLayout({ children }) {
  return (
    <>
      <Navbar>
        <NavbarContainer>
          <div>Logo</div>
          <div>
            <a href="google.com">Home</a>
            <a href="google.com">{HomeData.menuItem1}</a>
            <a href="google.com">{HomeData.menuItem2}</a>
          </div>
        </NavbarContainer>
      </Navbar>
      <Content>{children}</Content>
    </>
  );
}
