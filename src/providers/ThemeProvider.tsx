import React from 'react';
import { createTheme, ThemeProvider as Provider } from '@mui/material';

import useDarkMode from '../hooks/useDarkMode';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { darkMode } = useDarkMode();

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 440,
        md: 720,
        lg: 960,
        xl: 1200,
      },
    },
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return <Provider theme={theme}>{children}</Provider>;
};

export default ThemeProvider;
