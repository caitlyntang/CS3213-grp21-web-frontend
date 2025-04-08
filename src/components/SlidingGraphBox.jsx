import { LineChart } from '@mui/x-charts/LineChart';
import { useEffect, useState } from 'react';
import { Paper, Typography } from '@mui/material';

const MAX_POINTS = 10; // Show only the last 10 points

export default function SlidingGraphBox({ title, xAxisData, yAxisData, reset }) {
  const [xLabels, setXLabels] = useState([]); // Runtime as x-axis
  const [dataPoints, setDataPoints] = useState([]); // Y-axis data

  useEffect(() => {
    if (reset) {
      setXLabels([]); // Clear x-axis data
      setDataPoints([]); // Clear y-axis data
    }
  }, [reset]); // Reset when the reset prop changes

  useEffect(() => {
    if (yAxisData !== undefined) {
      setXLabels((prev) => {
        const updated = [...prev, xAxisData];
        return updated.length > MAX_POINTS ? updated.slice(-MAX_POINTS) : updated;
      });

      setDataPoints((prev) => {
        const updated = [...prev, yAxisData];
        return updated.length > MAX_POINTS ? updated.slice(-MAX_POINTS) : updated;
      });
    }
  }, [yAxisData]); // Trigger updates only when yAxisData changes

  return (
    <Paper elevation={5} sx={{ borderRadius: 5, width: 420, padding: 2 }}>
      <Typography variant="h5">{title}</Typography>
      <Paper elevation={5} sx={{ margin: 1 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center">
          {yAxisData || 0} {/* Display the latest y-axis value */}
        </Typography>
      </Paper>
      <LineChart skipAnimation
        width={400}
        height={300}
        xAxis={[{ data: xLabels, label: 'Runtime (seconds)', min: xLabels[0] }]} // Use runtime as x-axis
        series={[
          {
            data: dataPoints,
            curve: 'catmullRom', // Smooth line
            showMark: false, // Hide markers for the line
          },
        ]}
        margin={{ left: 50, right: 20, top: 20, bottom: 50 }} // Adjust margins
      />
    </Paper>
  );
}
