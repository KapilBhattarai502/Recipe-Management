import {React,useState} from 'react'
import {Outlet} from 'react-router-dom'
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Sidebar from '../../Components/Sidebar/sidebar';
import SmallSideMenuBar from '../../Components/SmallSidemenubar/SmallSideMenuBar';
import MainBar from '../../Components/MainBar/MainBar';

const MainLayout = () => {
    const [menuBar, setMenuBar] = useState(false);
    const [home,setHome]=useState(false);
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
        
          <Grid size={menuBar? 4 :1} className="bg-slate-600 text-white p-4 h-lvh">
          {menuBar ? <Sidebar /> : <SmallSideMenuBar/>}
        

            
          </Grid>
          <Grid size={menuBar?8:11} className="bg-slate-700">
            <MainBar setmenuBar={setMenuBar} menuBar={menuBar} />
            <Outlet/>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default MainLayout