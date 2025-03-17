import { Box, Typography } from "@mui/material";
import { logs } from "../data/mockdata";


function BugLogs() {

    return (
        <Box sx={{margin:4, padding:3, maxHeight: "60vh", overflow: "auto"}}>
            <Typography variant="h4">
                Bug Logs:
            </Typography>
            <Typography component="pre">
                {logs}
            </Typography>
        </Box>
    )
}
export default BugLogs