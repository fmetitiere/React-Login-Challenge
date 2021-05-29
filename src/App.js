import React, { useState } from "react";

import { createStore, applyMiddleware } from "redux";
import usersReducer from "./_github/reducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import styled from "styled-components";
import { ThemeProvider } from "styled-components";

import Routes from "./Routes";
import { ThemeButtons, ThemeLight, Themes } from "./_components/_layout/Themes";

import BackgroundAnimation from "./_components/_layout/BackgroundAnimation";
import { Content } from "./_components/_styles";

const store = createStore(usersReducer, applyMiddleware(thunk));

const ButtonWrapper = styled.div`
  background: ${({ theme }) => theme.BackgroundColor};
  position: absolute;
  display: flex;
  padding: 0.5rem;
  z-index: 199;
  right: 0;
  top: -2rem;
  @media(max-width: 767px){
    top: 0rem;
  }
  border-radius: 0.5rem 0.5rem 0 0;
`;

const ButtonStyled = styled.button`
  background: ${(props) => props.background};
  line-height: 0;
  border: 0;
  width: 2rem;
  height: 2rem;
  border-radius: 50rem;
  margin: 0 0.2rem;
  cursor: pointer;
`;

function App() {
  const [themeId, setThemeId] = useState(ThemeLight.id);

  const handleOnClick = (event) => {
    setThemeId(event.target.value);
  };

  const Buttons = () => {
    return ThemeButtons.map((element) => (
      <ButtonStyled
        small
        background={element.background}
        color={element.color}
        value={element.id}
        onClick={handleOnClick}
      ></ButtonStyled>
    ));
  };

  const ButtonsSelector = () => {
    return (
      <ButtonWrapper>
        <Buttons />
      </ButtonWrapper>
    );
  };

  const changeTheme = (themeId) => {
    return Themes.find((theme) => theme.id === themeId);
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={changeTheme(themeId)}>
        <BackgroundAnimation>
          <Content>
            <ButtonsSelector />
            <Routes />
          </Content>
        </BackgroundAnimation>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
