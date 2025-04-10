import { Box } from '@mui/material';
import logo from "../assets/sqlancer_logo.png";
import NavBar from './NavBar';
import MaterialUISwitch from './MaterialUISwitch';
import { useContext } from 'react';
import { ThemeContext } from '../theme';

function TopBar() {
  const { mode, toggleTheme } = useContext(ThemeContext);

  return (
    <Box sx={{ position: 'relative', width: '100%', height: '150px' }}>
      {/* Logo in the top-left corner */}
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          padding: 2, // Add some padding around the logo
            alignItems: 'center',
            height: '100%', // Take full height of the container
            display: 'flex', // Use flexbox to center the logo vertically
        }}
      >
        <img
          src={logo}
          alt="SQLancer Logo"
          style={{
            height: 'auto',
            maxWidth: '25%',
            minWidth: '250px',
          }}
        />
      </Box>

      {/* Navbar centered horizontally */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center', // Center horizontally
          alignItems: 'center', // Center vertically within the height of the container
          height: '100%', // Take full height of the container
        }}
      >
        <NavBar />
      </Box>

      {/* Theme toggle switch in the top-right corner */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          padding: 2,
        }}
      >
        <MaterialUISwitch
          checked={mode === 'dark'}
          onChange={toggleTheme}
        />
      </Box>
    </Box>
  );
}

export default TopBar;