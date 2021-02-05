// import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

function getFontFamily({ theme }) {
  return theme.fontFamily;
}

function fontWeight({ bold }) {
  return bold ? "800" : "400";
}

function fontUppercase({ upper }) {
  return upper ? "uppercase" : "unset";
}

function fontColor({ primary, secondary, contrast, theme }) {
  return (
    (primary && theme.primaryColor) ||
    (secondary && theme.secondaryColor) ||
    (contrast && "#fff") ||
    theme.fontColor
  );
}

export const LinkComp = styled(Link)`
  font-family: ${getFontFamily};
  color: white;
  margin-left: 1rem;
  &:hover {
    color: ${(props) => props.theme.secondaryColor};
  }
`;

export const Menu = styled.div``;

export const H1 = styled.h1`
  font-size: 2rem;
  font-family: ${getFontFamily};
  font-weight: ${fontWeight};
  text-transform: ${fontUppercase};
  color: ${fontColor};
  margin-bottom: 0rem;
`;

export const H2 = styled.h2`
  font-size: 1.5rem;
  font-family: ${getFontFamily};
  font-weight: ${fontWeight};
  text-transform: ${fontUppercase};
  color: ${fontColor};
  margin-bottom: 0rem;
`;

export const P = styled.p`
  font-size: 1rem;
  font-family: ${getFontFamily};
  font-weight: ${fontWeight};
  text-transform: ${fontUppercase};
  color: ${fontColor};
  margin: 1rem 0;
`;
