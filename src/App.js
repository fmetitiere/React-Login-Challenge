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
import {Content} from "./_components/_styles";

const store = createStore(usersReducer, applyMiddleware(thunk));

const ButtonWrapper = styled.div`
  background: rgba(0, 0, 0, 0.8);

  position: absolute;
  display: flex;
  padding: 0.3rem;
  flex-direction: column;
  z-index: 199;
  right: 0;
  top: 12rem;
  border-radius: 0.5rem 0 0 0.5rem;
`;

const ButtonStyled = styled.button`
  background: ${(props) => props.background};
  color: ${(props) => props.color};

  line-height: 0;
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
      >
        {element.name}
      </ButtonStyled>
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
