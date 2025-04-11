import React, { createContext, useState, useMemo } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
  const [mode, setMode] = useState('light'); // Default to light mode

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#F49D00', // Primary color
          },
        },
        typography: {
          fontFamily: 'Crimson Text, Arial, sans-serif', // Default font family
        }
      }),
    [mode]
  );

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
export default ThemeContextProvider;