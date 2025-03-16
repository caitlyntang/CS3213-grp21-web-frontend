import { DataGrid } from '@mui/x-data-grid';
import { bugs_info } from '../data/mockdata';
import { Box } from '@mui/material';



function BugsTable() {

    const columns = [
        { field: "id", headerName: "Bug ID"},
        { field: "date", headerName: "Date", flex:1},
        { field: "database", headerName: "Database",flex:1},
        { field: "version", headerName: "Version", flex:1},
        { field: "seed", headerName: "Seed", flex:1},
      ];
      
    return (
        <Box>
            <Box height="80vh">
                <DataGrid
                rows={bugs_info}
                columns={columns}/>
            </Box>
        </Box>
    )
}

export default BugsTable