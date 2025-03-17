import React from 'react';
import BugsTable from '../components/BugsTable';
import { Paper } from '@mui/material';
import { bugs_info} from '../data/mockdata'

function Bugs() {
  return (
    <div>
        <Paper sx={{margin:5}} elevation={5}>
        <BugsTable data={bugs_info}/>
      </Paper>
    </div>
  );
}

export default Bugs;
