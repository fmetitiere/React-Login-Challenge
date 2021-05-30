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

export const PrimaryButton = styled.button`
  font-family: ${getFontFamily};
  background: ${({ theme }) => theme.buttonColor};
  border: 0;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 5rem;
  font-size: 1rem;
  margin: 0 0 0 0.5rem;
  cursor: pointer;
  @media (max-width: 767px) {
    width: 100%;
    margin: 0;
  }
`;

export const SecondaryButton = styled(PrimaryButton)`
  border: 1px solid ${({ theme }) => theme.secondaryButtonColor};
  background: transparent;
  font-weight: bold;
  color: ${({ theme }) => theme.secondaryFontColor};
`;

export function Button({ children, secondary, ...props }) {
  return (
    (secondary && <SecondaryButton {...props}>{children}</SecondaryButton>) || (
      <PrimaryButton {...props}>{children}</PrimaryButton>
    )
  );
}

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

export const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  label {
    color: ${(props) => props.theme.fontColor};
    font-family: ${getFontFamily};
    font-size: 1rem;
  }
  > div {
    margin-right: 0.5rem;
    display: flex;
    align-items: center;
  }
  margin-top: 0.5rem;

  input {
    margin-right: 0.5rem;
  }

  input[type="radio"]:after {
    width: 1.1rem;
    height: 1.1rem;
    border-radius: 15px;
    top: -2px;
    left: -2px;
    position: relative;
    background-color: ${({theme}) => theme.userBoxColor};
    content: "";
    display: inline-block;
    visibility: visible;
    border: 2px solid white;
    cursor: pointer;
  }

  input[type="radio"]:checked:after {
    background-color: ${({theme}) => theme.fontColor};
  }
`;

const BackgroundWrapper = styled.div`
  width: 35rem;
  height: 49rem;
  max-height: 55rem;
  @media (min-width: 768px) and (max-width: 1440px){
    height: 46rem;
  }
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
