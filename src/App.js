import React from 'react';
import {ThemeProvider} from 'styled-components';
import Routes from './Routes';
import theme from './_layout/DefaultTheme';

function App() {
  return (
    <ThemeProvider theme={theme}>
          <Routes/>
    </ThemeProvider>
  );
}

export default App;
