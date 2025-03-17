import { DataGrid } from '@mui/x-data-grid';

import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';



function BugsTable({data}) {

    const columns = [
        { field: "id", headerName: "Bug ID"},
        { field: "date", headerName: "Date", flex:1},
        { field: "database", headerName: "Database",flex:1},
        { field: "version", headerName: "Version", flex:1},
        { field: "seed", headerName: "Seed", flex:1},
      ];
      
    const navigate = useNavigate(); // Initialize the useNavigate hook
    
    // Function to handle row click
    function handleRowClick (params) {
    // Navigate to the RowDetails page with the clicked row's id
    navigate('/bugdetails', { state: { bug: params.row } });
    };
    return (
            <Box>
                <DataGrid 
                rows={data}
                columns={columns}
                onRowClick={handleRowClick}/>
            </Box>
        
    )
}

export default BugsTable