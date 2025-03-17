import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import logo from "../assets/sqlancer_logo.png"
import NavBar from './NavBar';


function TopBar() {
    return(
        <Box sx={{display:'flex', margin:4}}>
            <Stack direction="row" spacing={15} alignItems={'center'}>
                <img src={logo} alt='sqlancer logo' style={{ width: 'auto', height: '100px' }}/>
                
                    <NavBar/>
                
            </Stack>
        </Box>
        
    )
}
export default TopBar