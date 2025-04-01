import { AppBar, Toolbar, Typography, Button, Container, Box } from "@mui/material";
import { Link } from "react-router-dom";
import React from 'react';

function Navbar() {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around', // Evenly space the buttons
          alignItems: 'center',  // Center align items vertically
          backgroundColor: '#1A1C1E',  // Background color of the NavBar
          
          borderRadius: '100px',  // Rounded corners for the navbar
          height: "70px",
          width: '500px'  // Full width of the page
        }}
      >
        <Button
          component={Link}
          to="/"  // Link to Dashboard
          color="inherit"
          sx={{
            flex:1,
            borderRadius: '100px', // Rounded corners for the button
            padding: '8px 16px',  // Adjust padding for better button size
            textTransform: 'none', // Keep text in normal case (no uppercase)
          }}
        >
          <Typography variant="h4">
            Dashboard
          </Typography>
        </Button>
        
        <Button
          component={Link}
          to="/bugs"  // Link to Bugs
          color="inherit"
          sx={{
            flex:1,
            borderRadius: '100px', // Rounded corners for the button
            padding: '8px 16px',  // Adjust padding for better button size
            textTransform: 'none', // Keep text in normal case (no uppercase)
          }}
        >
          <Typography variant="h4">
            Bugs
          </Typography>
        </Button>
      </Box>
    );
  }

export default Navbar;
