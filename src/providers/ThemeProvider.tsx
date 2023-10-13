import React, { createContext, useContext, useState } from 'react';
import { createTheme, ThemeProvider as Provider } from '@mui/material';

import DarkModeStore from '../types/darkMode';

const DarkModeContext = createContext<DarkModeStore | undefined>(undefined);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false);
  const value = {
    darkMode,
    toggleDarkMode: () => setDarkMode(!darkMode),
  };

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

  return (
    <DarkModeContext.Provider value={value}>
      <Provider theme={theme}>{children}</Provider>
    </DarkModeContext.Provider>
  );
};

const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error('useDarkMode must be used within a ThemeProvider');
  }

  return context;
};

export { useDarkMode };

export default ThemeProvider;
