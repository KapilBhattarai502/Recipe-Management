import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Sidebar from "./Components/Sidebar/sidebar";
import MainBar from "./Components/MainBar/MainBar";
import SmallSideMenuBar from "./Components/SmallSidemenubar/SmallSideMenuBar";

const App = () => {
  const [menuBar, setMenuBar] = useState(false);
  const [home,setHome]=useState(false);
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
        
          <Grid size={menuBar? 4 :1} className="bg-slate-600 text-white p-4 h-lvh">
          {menuBar ? <Sidebar /> : <SmallSideMenuBar/>}
        

            
          </Grid>
          <Grid size={menuBar?8:11} className="bg-slate-700">
            <MainBar setmenuBar={setMenuBar} menuBar={menuBar} />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default App;
