import { DataGrid } from '@mui/x-data-grid';

import { Alert, Box, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useEffect, useState } from "react";
import { get_all_reports } from '../apis.js';



function BugsTable({data}) {
    const [reports, setReports] = useState([]); // State to store reports
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Initialize the useNavigate hook

    // Function to process and structure reports
    const processReports = (rawData) => {
        if (!Array.isArray(rawData)) return []; 
        return rawData.map((report, index) => ({
            id: report.id || index,
            date: report.report_date || "N/A",
            database: report.db_type || "Unknown",
            version: report.db_version || "Unknown",
            seed: report.seed || "N/A",
            ...report
        }));
    };

    useEffect(() => {
        if (data) {
            setReports(processReports(data));
                    setLoading(false);
                    return;
                }

        const fetchReports = async () => {
            try {
                const data = await get_all_reports();
                console.log("Fetched Reports:", data);
    
                if (!data || !Array.isArray(data)) {
                    setReports([]); // Prevent crashes
                    throw new Error("Invalid response format.");
                }
    
                setReports(processReports(data));
            } catch (err) {
                console.error("Error fetching reports:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
    
        fetchReports();
    }, []);

    if (loading) return <Box p={2}><CircularProgress /></Box>;
    if (error) return <Box p={2}><Alert severity="error">{error}</Alert></Box>;

    const columns = [
        { field: "id", headerName: "Bug ID"},
        { field: "date", headerName: "Date", flex:1},
        { field: "database", headerName: "Database",flex:1},
        { field: "version", headerName: "Version", flex:1},
        { field: "seed", headerName: "Seed", flex:1},
      ];
      

    
    // Function to handle row click
    function handleRowClick (params) {
    // Navigate to the RowDetails page with the clicked row's id
    navigate(`/bugdetails/${params.row.id}`);
    };

    return (
            <Box>
                <DataGrid 
                rows={reports}
                columns={columns}
                onRowClick={handleRowClick}/>
            </Box>
        
    )
}

export default BugsTable