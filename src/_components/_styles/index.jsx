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
  color: ${(props) => props.theme.fontColor};
  margin-bottom: 0;
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
`;

export const TextField = styled.input`
  border: 0;
  border-bottom: 1px solid ${(props) => props.theme.fontColor};
  font-size: 1rem;
  color: ${(props) => props.theme.fontColor};
  outline: 0;
  background: transparent;
  &::placeholder {
    color: ${(props) => props.theme.fontColor};
  }
`;

const BackgroundWrapper = styled.div`
  width: 35rem;
  height: 50rem;
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
  padding: 2rem;
  background: ${({ theme }) => theme.BackgroundColor};
`;

const LoaderComponent = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: ${({ theme }) => theme.fontColor};
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
`;

export function Loader() {
  return (
    <LoaderComponent>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </LoaderComponent>
  );
}

export function Content({ children }) {
  return (
    <BackgroundWrapper>
      <>{children}</>
    </BackgroundWrapper>
  );
}
