import React from 'react';
import { createTheme, ThemeProvider as Provider } from '@mui/material';

import useDarkMode from '../hooks/useDarkMode';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { darkMode } = useDarkMode();

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return <Provider theme={theme}>{children}</Provider>;
};

export default ThemeProvider;
