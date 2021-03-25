import React from 'react';
import { ThemeProvider, StylesProvider } from '@material-ui/core/styles';
import StoreProvider from '@/store/StoreProvider';
import Router from '@/routes/router';

import theme from '@/styles/theme/theme';

const App = () => {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <StoreProvider>
          <Router />
        </StoreProvider>
      </ThemeProvider>
    </StylesProvider>
  );
};
export default App;
