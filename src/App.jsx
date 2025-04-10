
import {Routes, Route} from "react-router-dom"
import { Container, CssBaseline } from '@mui/material'
import TopBar from './components/TopBar'
import Dashboard from './pages/dashboard';
import Bugs from "./pages/bugs";
import BugDetails from "./pages/BugDetails";
import ThemeContextProvider from "./theme";

function App() {
  return (
    <ThemeContextProvider>
      <CssBaseline/>
      <main>
        <TopBar/>
        <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/bugs" element={<Bugs/>}/>
        <Route path="/bugdetails/:id" element={<BugDetails/>}/>
        </Routes>
      </main>
    </ThemeContextProvider>
      
    
  );
    
}

export default App
