import { Box } from "@mui/material";


function StatBox({title, data}) {
    return (
        <Box>
            {title}
            {data}
        </Box>
    )
}
export default StatBox