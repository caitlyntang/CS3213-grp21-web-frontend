import React from 'react';
import { Paper, Typography } from '@mui/material';

function StatBox({ title, data }) {
  return (
      <Paper elevation={5} sx={{ borderRadius: 5, padding: 2, width: '100%', height: '100%' }}>
        <Typography variant="h5">{title}</Typography>
        <Paper elevation={5} sx={{ margin: 1 , borderRadius: 3}}>
          <Typography variant="h4" fontWeight={'bold'} textAlign="center">
            {data}
          </Typography>
        </Paper>
      </Paper>
  );
}

export default StatBox;
