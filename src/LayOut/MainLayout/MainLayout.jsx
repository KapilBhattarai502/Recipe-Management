import { React, useEffect, useState, createContext } from "react";
import { Outlet } from "react-router-dom";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Sidebar from "../../Components/Sidebar/sidebar";
import SmallSideMenuBar from "../../Components/SmallSidemenubar/SmallSideMenuBar";
import MainBar from "../../Components/MainBar/MainBar";
import BasicModal from "../../Components/Modal/Modal";
import LogoutIcon from "@mui/icons-material/Logout";

export const LoginContext = createContext(null);

const MainLayout = () => {
  const [menuBar, setMenuBar] = useState(false);
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setisLoggedIn] = useState(null);
  const [jwt, setJwt] = useState(null);

  // Check for JWT when the component mounts
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    setJwt(token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setJwt(null); // Reset JWT after logout
  };

  return (
    <div>
      <div className="bg-slate-500 flex justify-end gap-x-4 p-4 text-white">
        {jwt ? (
          <LogoutIcon onClick={handleLogout} />
        ) : (
          <div className="flex justify-end gap-x-4 p-4 ">
            <button
              onClick={() => {
                setOpen(true);
                setisLoggedIn(true); // Login state
              }}
            >
              Login
            </button>
            <button
              onClick={() => {
                setOpen(true);
                setisLoggedIn(false); // Register state
              }}
            >
              Register
            </button>
          </div>
        )}
      </div>

      <LoginContext.Provider value={{setJwt}}>
        <BasicModal
          open={open}
          setOpen={setOpen}
          isLoggedIn={isLoggedIn}
       
        />
      </LoginContext.Provider>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1} sx={{}}>
          <Grid
            size={menuBar ? 4 : 1}
            className="bg-slate-600 text-white p-4 min-h-lvh"
          >
            {menuBar ? <Sidebar /> : <SmallSideMenuBar />}
          </Grid>
          <Grid size={menuBar ? 8 : 11} className="bg-slate-700 min-h-lvh">
            <MainBar setmenuBar={setMenuBar} menuBar={menuBar} />
            <Outlet />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default MainLayout;
