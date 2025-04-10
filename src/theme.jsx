import React, { createContext, useState, useMemo } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
  const [mode, setMode] = useState('dark'); // Default to light mode

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#F49D00', // Primary color
          },
        },
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