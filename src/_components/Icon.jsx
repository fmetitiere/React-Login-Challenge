import React from "react";
import styled from "styled-components";
import { ReactSVG } from "react-svg";

const LogoWrapper = styled.div`
  div {
    display: flex;
  }
  svg {
    fill: ${({ theme }) => theme.iconColor};
    width: 4rem;
    height: 4rem;
  }
`;

const IconWrapper = styled.div`
  div {
    display: flex;
  }
  svg {
    fill: ${({ theme }) => theme.iconColor};
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export default function Icon({ name }) {
  switch (name) {
    case "logo":
      return (
        <LogoWrapper>
          <ReactSVG src="_assets/icons/logo.svg" />
        </LogoWrapper>
      );
    case "eye":
      return (
        <IconWrapper>
          <ReactSVG src="_assets/icons/eye.svg" />
        </IconWrapper>
      );
    case "user":
      return (
        <IconWrapper>
          <ReactSVG src="_assets/icons/user.svg" />
        </IconWrapper>
      );
    case "pass":
      return (
        <IconWrapper>
          <ReactSVG src="_assets/icons/password.svg" />
        </IconWrapper>
      );
    default:
      return (
        <IconWrapper>
          <ReactSVG src="_assets/icons/logo.svg" />
        </IconWrapper>
      );
  }
}
