import { Box, Card, Paper } from '@mui/material';
import React from 'react';
import { useLocation, useParams } from 'react-router-dom'; // To get the URL parameter
import BugsTable from '../components/BugsTable';
import BugLogs from '../components/Buglogs';

function BugDetails() {
    const { id } = useParams(); // Get the 'id' from the URL
    const location = useLocation();
    const { bug } = location.state || {}; // Extract bug data


  // You can fetch data for the specific row using the `id`
  // For now, we will just display the id
  return (
    <Box sx={{margin:5}}>
        <Paper>
            <BugsTable data={[bug]}/>
        </Paper>
        <Paper>
            <BugLogs/>
        </Paper>
    </Box>

  );
}

export default BugDetails;
