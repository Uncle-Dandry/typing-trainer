import React from 'react';
import { createRoot } from 'react-dom/client';
import { CacheProvider } from '@emotion/react';

import { ThemeProvider } from '@mui/material/styles';
import MuiCssBaseline from '@mui/material/CssBaseline';

import theme, { createEmotionCache } from 'styles/theme';

import HomePage from 'pages';

const muiCache = createEmotionCache();

const App = () => {
  return (
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={theme}>
        <MuiCssBaseline />
        <HomePage />
      </ThemeProvider>
    </CacheProvider>
  );
};

const rootElement = document.getElementById('root') as Element;
const root = createRoot(rootElement);

root.render(<App />);
