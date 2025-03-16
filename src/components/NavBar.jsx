import { AppBar, Toolbar, Typography, Button, Container, Box } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around', // Evenly space the buttons
          alignItems: 'center',  // Center align items vertically
          backgroundColor: '#1A1C1E',  // Background color of the NavBar
          padding: '10px 20px',  // Padding inside the navbar
          borderRadius: '100px',  // Rounded corners for the navbar
          width: '500px',  // Full width of the page
        }}
      >
        <Button
          component={Link}
          to="/"  // Link to Dashboard
          color="inherit"
          sx={{
            borderRadius: '12px', // Rounded corners for the button
            padding: '8px 16px',  // Adjust padding for better button size
            textTransform: 'none', // Keep text in normal case (no uppercase)
          }}
        >
          Dashboard
        </Button>
        
        <Button
          component={Link}
          to="/bugs"  // Link to Bugs
          color="inherit"
          sx={{
            borderRadius: '12px', // Rounded corners for the button
            padding: '8px 16px',  // Adjust padding for better button size
            textTransform: 'none', // Keep text in normal case (no uppercase)
          }}
        >
          Bugs
        </Button>
      </Box>
    );
  }

export default Navbar;
