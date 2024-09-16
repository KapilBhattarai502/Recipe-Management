import { React, useState } from "react";
import { Outlet } from "react-router-dom";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Sidebar from "../../Components/Sidebar/sidebar";
import SmallSideMenuBar from "../../Components/SmallSidemenubar/SmallSideMenuBar";
import MainBar from "../../Components/MainBar/MainBar";
import BasicModal from "../../Components/Modal/Modal";
import LogoutIcon from '@mui/icons-material/Logout';

const MainLayout = () => {
  const [menuBar, setMenuBar] = useState(false);
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setisLoggedIn] = useState(null);

  return (
    <div>
      <div className="bg-slate-500 flex justify-end gap-x-4 p-4 text-white">
      <LogoutIcon/>
        <button
          onClick={() => {
            setOpen(true);
            setisLoggedIn(true);
          }}
        >
          Login
        </button>
        <button
          onClick={() => {
            setOpen(true);

            setisLoggedIn(false);
          }}
        >
          Register
        </button>
      </div>
      <BasicModal open={open} setOpen={setOpen} isLoggedIn={isLoggedIn} />

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid
            size={menuBar ? 4 : 1}
            className="bg-slate-600 text-white p-4 h-lvh"
          >
            {menuBar ? <Sidebar /> : <SmallSideMenuBar />}
          </Grid>
          <Grid size={menuBar ? 8 : 11} className="bg-slate-700">
            <MainBar setmenuBar={setMenuBar} menuBar={menuBar} />
            <Outlet />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default MainLayout;
