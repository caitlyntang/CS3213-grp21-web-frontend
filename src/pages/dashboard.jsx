import React from 'react';
import StatBox from '../components/StatBox';
import GraphBox from '../components/GraphBox';
import { Grid, Grid2 } from '@mui/material';
import DatabaseLogger from '../components/DatabaseLogger';

function Dashboard() {
  return (
    
    <Grid2 container spacing={3}>
      <Grid2>
        <GraphBox/>
      </Grid2>
      <Grid2 size={3}>
        <StatBox title="Status: Running" data="23423423" />
      </Grid2>
      <Grid2 size={3}>
        <StatBox title="No.of threads shut down" data="100" />
      </Grid2>
      <Grid2 size={3}>
        <StatBox title="% of successful statements" data="45000" />
      </Grid2>
      <Grid2 size={3}>
        <StatBox title="Queries/sec" data="2" />
      </Grid2>
      <Grid2 size={3}>
        <StatBox title="Dbs/sec" data="2" />
      </Grid2>
      <Grid2 xs={12}>
        <DatabaseLogger/>
      </Grid2>
    </Grid2>
  );
}

export default Dashboard;