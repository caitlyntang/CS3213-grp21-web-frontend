import { Typography, Button, Paper } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import React from "react";

function Navbar() {
  const location = useLocation(); // Get the current route

  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "space-around", // Evenly space the buttons
        alignItems: "center", // Center align items vertically
        borderRadius: "100px", // Rounded corners for the navbar
        height: "70px", // Fixed height for the navbar
        width: "35%", // Fixed width for the navbar
        maxWidth: "800px", // Maximum width for the navbar
        minWidth: "350px", // Minimum width for the navbar
      }}
    >
      <Button
        component={Link}
        to="/" // Link to Dashboard
        color="inherit"
        sx={{
          flex: 1,
          height: "100%", // Make the button's height match the navbar's height
          borderRadius: "100px", // Rounded corners for the button
          padding: "0 16px", // Remove vertical padding, keep horizontal padding
          textTransform: "none", // Keep text in normal case (no uppercase)
          backgroundColor: location.pathname === "/" ? "primary.main" : "transparent", // Highlight active tab
          color: location.pathname === "/" ? "white" : "inherit", // Change text color for active tab
          display: "flex",
          alignItems: "center", // Center align text vertically
          justifyContent: "center", // Center align text horizontally
        }}
      >
        <Typography variant="h4">Dashboard</Typography>
      </Button>

      <Button
        component={Link}
        to="/bugs" // Link to Bugs
        color="inherit"
        sx={{
          flex: 1,
          height: "100%", // Make the button's height match the navbar's height
          borderRadius: "100px", // Rounded corners for the button
          padding: "0 16px", // Remove vertical padding, keep horizontal padding
          textTransform: "none", // Keep text in normal case (no uppercase)
          backgroundColor: location.pathname === "/bugs" ? "primary.main" : "transparent", // Highlight active tab
          color: location.pathname === "/bugs" ? "white" : "inherit", // Change text color for active tab
          display: "flex",
          alignItems: "center", // Center align text vertically
          justifyContent: "center", // Center align text horizontally
        }}
      >
        <Typography variant="h4">Bugs</Typography>
      </Button>
    </Paper>
  );
}

export default Navbar;
