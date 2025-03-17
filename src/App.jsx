
import {Routes, Route} from "react-router-dom"
import { Container, CssBaseline } from '@mui/material'
import TopBar from './components/TopBar'
import Dashboard from './pages/dashboard';
import Bugs from "./pages/bugs";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import darkTheme from "./theme";
import BugDetails from "./pages/BugDetails";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <main>
        <TopBar/>
        <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/bugs" element={<Bugs/>}/>
        <Route path="/bugdetails/" element={<BugDetails/>}/>
        </Routes>
      </main>
    </ThemeProvider>
      
    
  );
    
}

export default App
