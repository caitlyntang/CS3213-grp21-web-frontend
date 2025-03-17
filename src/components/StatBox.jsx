import { Paper, Typography } from "@mui/material";


function StatBox({title, data}) {
    return (
        <Paper elevation={5} sx={{borderRadius:5, maxWidth:500, padding:2}} >
            <Typography variant='h5' >
            {title}
            </Typography>
            <Paper elevation={5} sx={{margin:1}}>
                <Typography variant='h4' fontWeight={"bold"} textAlign='center'>
                {data}
                </Typography>
            </Paper>
      </Paper>
    )
}
export default StatBox