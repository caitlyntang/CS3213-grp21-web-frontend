// src/components/DatabaseLogger.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import socketService from '../utils/socketService';

function DatabaseLogger() {
  const [logs, setLogs] = useState([]);
  const logContainerRef = useRef(null);

  useEffect(() => {
    // Connect to the socket server
    socketService.connect();
    
    // Subscribe to database logs
    const unsubscribe = socketService.subscribe('statistics-update', (log) => {
      setLogs(prevLogs => [...prevLogs, log]);
    });
    
    // Cleanup on unmount
    return () => {
      unsubscribe();
    };
  }, []);
  
  // Auto-scroll to bottom when new logs arrive
  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString();
  };

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
        Database Activity Logs
      </Typography>
      <Paper 
        ref={logContainerRef}
        sx={{
          height: '300px',
          overflowY: 'auto',
          p: 1,
          bgcolor: 'background.paper'
        }}
      >
        {logs.length === 0 ? (
          <Typography sx={{ p: 2, color: 'text.secondary' }}>
            No database activity recorded yet.
          </Typography>
        ) : (
          logs.map((log, index) => (
            <Box 
              key={index} 
              sx={{
                p: 1,
                mb: 1,
                borderLeft: t => `4px solid ${
                  log.operation.includes('ERROR') ? t.palette.error.main : 
                  log.operation.includes('SUCCESS') ? t.palette.success.main : t.palette.primary.main
                }`,
                bgcolor: 'background.default'
              }}
            >
              <Box sx={{ fontWeight: 'bold', display: 'flex', gap: 1 }}>
                <Typography component="span" variant="body2" color="text.secondary">
                  [{formatTimestamp(log.timestamp)}]
                </Typography>
                <Typography component="span" variant="body2">
                  {log.operation}
                </Typography>
              </Box>
              <Box 
                component="pre"
                sx={{ 
                  mt: 1, 
                  p: 1,
                  bgcolor: 'background.paper',
                  fontSize: '0.75rem',
                  overflowX: 'auto',
                  borderRadius: 1
                }}
              >
                {JSON.stringify(log.details, null, 2)}
              </Box>
            </Box>
          ))
        )}
      </Paper>
    </Box>
  );
}

export default DatabaseLogger;