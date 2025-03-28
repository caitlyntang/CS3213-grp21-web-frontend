import { useEffect, useState } from "react";
import { Box, CircularProgress, Alert, Paper } from "@mui/material";
import { get_report_by_id } from "../apis";
import { useParams } from 'react-router-dom'; // To get the URL parameter
import BugsTable from '../components/BugsTable';
import BugLogs from '../components/Buglogs';

function BugDetails() {
    const { id } = useParams(); // Get the 'id' from the URL

    const [bug, setBug] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBugDetails = async () => {
            try {
                const data = await get_report_by_id(id);
                setBug(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBugDetails();
    }, [id]);

    if (loading) return <Box p={2}><CircularProgress /></Box>;
    if (error) return <Box p={2}><Alert severity="error">{error}</Alert></Box>;
    if (!bug) return <Box p={2}><Alert severity="warning">Bug not found.</Alert></Box>;
    
  return (
    <Box sx={{margin:5}}>
        <Paper elevation={5}>
            <BugsTable data={[bug]}/>
        </Paper>
        <Paper elevation={5}>
            <BugLogs logs={bug.details}/>
        </Paper>
    </Box>

  );
}

export default BugDetails;
