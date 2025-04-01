import { Box, Typography, CircularProgress, Alert } from "@mui/material";
import React from "react";

function BugLogs({logs}) {
    const formattedLogs = logs.replace(/\\r\\n/g, '\r\n')  // Convert escaped newlines into real newlines
                                    .replace(/\\n/g, '\n');  // Handle single \n if it's escaped
    return (
        <Box sx={{margin:4, padding:3, maxHeight: "60vh", overflow: "auto"}}>
            <Typography variant="h4">
                Bug Logs:
            </Typography>
            <Typography component="pre">
                {formattedLogs}
            </Typography>
        </Box>
    )
}
export default BugLogs