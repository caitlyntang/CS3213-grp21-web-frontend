import { Box } from '@mui/material';
import logo from "../assets/sqlancer_logo.png";
import NavBar from './NavBar';

function TopBar() {
  return (
    <Box sx={{ position: 'relative', width: '100%', height: '150px' }}>
      {/* Logo in the top-left corner */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          padding: 2, // Add some padding around the logo
          alignItems: 'center',
        }}
      >
        <img
          src={logo}
          alt="SQLancer Logo"
          style={{
            height: 'auto',
            maxWidth: '25%',
            minWidth: '300px',
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
    </Box>
  );
}

export default TopBar;