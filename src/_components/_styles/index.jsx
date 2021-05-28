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


export const LinkComp = styled(Link)`
  font-family: ${getFontFamily};
  color: white;
  margin-left: 1rem;
  &:hover {
    color: ${(props) => props.theme.secondaryColor};
  }
`;


export const H1 = styled.h1`
  font-size: 2rem;
  font-family: ${getFontFamily};
  font-weight: ${fontWeight};
  text-transform: ${fontUppercase};
  color: ${(props) => props.theme.fontColor};
  margin-bottom: 0rem;
`;

export const H2 = styled.h2`
  font-size: 1.5rem;
  font-family: ${getFontFamily};
  font-weight: ${fontWeight};
  text-transform: ${fontUppercase};
  color: ${(props) => props.theme.fontColor};
  margin-bottom: 0rem;
`;

export const P = styled.p`
  font-size: 1rem;
  font-family: ${getFontFamily};
  font-weight: ${fontWeight};
  text-transform: ${fontUppercase};
  color: color: ${(props) => props.theme.fontColor};
  margin: 1rem 0;
`;


const BackgroundWrapper = styled.div`
  width: 40rem;
  height: 40rem;
  z-index: 1999;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 2rem;
  overflow: hidden;
  background: ${({theme}) => theme.BackgroundColor};
`;

export function Content({ children }) {
  return (
    <BackgroundWrapper>
      <>{children}</>
    </BackgroundWrapper>
  );
}
