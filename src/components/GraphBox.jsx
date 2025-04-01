import { Paper, Typography } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import React from "react";


function GraphBox() {
  const queries = 345677
    return (
      <Paper elevation={5} sx={{borderRadius:5, width:500, padding:2}} >
        <Typography variant='h5' >
          Total no.of queries
        </Typography>
        <Paper elevation={5} sx={{margin:1}}>
          <Typography variant='h4' fontWeight={"bold"} textAlign='center'>
            {queries}
          </Typography>
        </Paper >
        <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
          },
        ]}
        width={500}
        height={300}
        />
      </Paper>
      
    )
}
export default GraphBox