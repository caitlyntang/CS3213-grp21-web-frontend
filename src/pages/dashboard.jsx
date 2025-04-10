import React, { useEffect, useState } from 'react';
import StatBox from '../components/StatBox';
import GraphBox from '../components/GraphBox';
import SlidingGraphBox from '../components/SlidingGraphBox';
import { Grid2, Box } from '@mui/material';
import SocketService from '../utils/socketService';

function Dashboard() {
  const [statistics, setStatistics] = useState({
    successfulStatements: 0,
    throughput: 0,
    queries: 0,
    throughputDbs: 0,
    shutDown: 0,
  });

  const [sqlancerStatus, setSqlancerStatus] = useState({
    running: false,
    runtime: 0,
  });

  const [resetGraphs, setResetGraphs] = useState(false); // Track when to reset graphs

  useEffect(() => {
    // Connect to the socket server
    SocketService.connect();

    // Subscribe to statistics updates
    const unsubscribeStatistics = SocketService.subscribe('statistics-update', (data) => {
      setStatistics(data);
    });

    // Subscribe to SQLancer status updates
    const unsubscribeStatus = SocketService.subscribe('sqlancer-status', (status) => {
      setSqlancerStatus(status);

      // Reset graphs when SQLancer stops
      if (!status.running) {
        setResetGraphs(true); // Trigger reset
        setTimeout(() => setResetGraphs(false), 100); // Reset the flag after triggering
      }
    });

    // Cleanup on component unmount
    return () => {
      unsubscribeStatistics();
      unsubscribeStatus();
      SocketService.disconnect();
    };
  }, []);

  // Format runtime as HH:MM:SS
  const formatRuntime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Grid2 container spacing={2} justifyContent="center" padding={2}>
        <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
          <StatBox
            title="Status"
            data={
              <span
                style={{
                  color: sqlancerStatus.running ? 'green' : 'red', // Green for running, red for not running
                  fontWeight: 'bold',
                }}
              >
                {sqlancerStatus.running ? 'Running' : 'Not Running'}
              </span>
            }
          />
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
          <StatBox
            title="Runtime"
            data={sqlancerStatus.running ? formatRuntime(sqlancerStatus.runtime) : '00:00:00'}
          />
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
          <StatBox title="No.of threads shut down" data={statistics.shutDown} />
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
          <StatBox title="% of successful statements" data={statistics.successfulStatements} />
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
          <GraphBox
            runtimeData={sqlancerStatus.runtime} // Pass runtime directly
            queryData={statistics.queries} // Pass queries directly
            reset={resetGraphs} // Pass reset flag
          />
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
          <SlidingGraphBox
            title="Queries/sec"
            yAxisData={statistics.throughput} // Pass throughput directly
            xAxisData={sqlancerStatus.runtime} // Pass runtime directly
            reset={resetGraphs} // Pass reset flag
          />
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
          <SlidingGraphBox
            title="Dbs/sec"
            yAxisData={statistics.throughputDbs} // Pass throughput directly
            xAxisData={sqlancerStatus.runtime} // Pass runtime directly
            reset={resetGraphs} // Pass reset flag
          />
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default Dashboard;