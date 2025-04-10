import { Paper, Typography } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import React, { useEffect, useState } from 'react';

function GraphBox({ runtimeData, queryData, reset }) {
  const [runtime, setRuntime] = useState([]); // Internal state for x-axis (runtime)
  const [queries, setQueries] = useState([]); // Internal state for y-axis (queries)

  useEffect(() => {
    if (reset) {
      setRuntime([]); // Clear runtime data
      setQueries([]); // Clear queries data
    }
  }, [reset]); // Reset when the reset prop changes

  useEffect(() => {
    if (runtimeData !== undefined && queryData !== undefined) {
      // Update runtime (x-axis)
      setRuntime((prev) => [...prev, runtimeData]);

      // Update queries (y-axis)
      setQueries((prev) => [...prev, queryData]);
    }
  }, [queryData]); // Update whenever new data is passed in

  return (
    <Paper elevation={5} sx={{ borderRadius: 5, width: '100%', padding: 2 }}>
      <Typography variant="h5">Total no.of queries</Typography>
      <Paper elevation={5} sx={{ margin: 1 , borderRadius: 3}}>
        <Typography variant="h4" fontWeight="bold" textAlign="center">
          {queries[queries.length - 1] || 0} {/* Display the latest query count */}
        </Typography>
      </Paper>
      <LineChart
        xAxis={[
          {
            data: runtime,
            label: 'Runtime (seconds)', // Label for the x-axis
            tickLabelStyle: { fontSize: 10 },
          },
        ]}
        yAxis={[
          {
            tickLabelStyle: { fontSize: 10 },
          },
        ]}
        series={[
          {
            data: queries, // Use queries for the y-axis
            curve: 'natural', // Smooth line
            showMark: false, // Hide markers for the line
          },
        ]}
        height={300}
        margin={{ left: 70, right: 20, top: 20, bottom: 50 }} // Adjust margins
        sx={{ width: '100%' }} // Full width
      />
    </Paper>
  );
}

export default GraphBox;