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
  color: ${(props) => props.theme.fontColor};
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

export const Button = styled.button`
  font-family: ${getFontFamily};
  background: ${({ theme }) => theme.buttonColor};
  border: 0;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 5rem;
  font-size: 1rem;
  margin: 0 0 0 0.5rem;
  cursor: pointer;
  width: 100%;
  margin: 0;
`;

export const TextField = styled.input`
  border: 0;
  width: 100%;

  font-size: 1rem;
  color: ${(props) => props.theme.fontColor};
  outline: 0;
  background: transparent;
  &::placeholder {
    color: ${(props) => props.theme.fontColor};
  }
`;

const BackgroundWrapper = styled.div`
  width: 25rem;
  height: 28rem;
  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
  }
  z-index: 1999;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  border-radius: 2rem 0 2rem 2rem;
  @media (max-width: 767px) {
    border-radius: 0;
  }
  padding: 2rem;
  background: ${({ theme }) => theme.BackgroundColor};
`;

export function Content({ children }) {
  return (
    <BackgroundWrapper>
      <>{children}</>
    </BackgroundWrapper>
  );
}
