import React from 'react';
import BugsTable from '../components/BugsTable';
import { Paper } from '@mui/material';


function Bugs() {
  return (
    <div>
        <Paper sx={{margin:5}} elevation={5}>
        <BugsTable/>
      </Paper>
    </div>
  );
}

export default Bugs;
