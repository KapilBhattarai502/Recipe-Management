import React from "react";
import Grid from "@mui/material/Grid2";
import AddIcon from "@mui/icons-material/Add";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SearchIcon from '@mui/icons-material/Search';
import SellIcon from '@mui/icons-material/Sell';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditIcon from '@mui/icons-material/Edit';

const Home = () => {
  return (
    <div>
      <div>
        <h1 className="text-center text-white text-7xl font-bold">Cook Book</h1>
      </div>
      <div>
        <Grid container spacing={2}>
          <Grid size={4} className="p-4">
            <div className="flex justify-between items-center bg-slate-800 p-3 text-white rounded-sm cursor-pointer">
              <p className="text-lg">Add A Recipe</p>
              <AddIcon />
            </div>
            
          </Grid>
          <Grid size={4} className="p-4">
            <div className="flex justify-between items-center bg-slate-800 p-3 text-white rounded-sm cursor-pointer">
              <p className="text-lg">My Recipes</p>
              <MenuBookIcon/>
             
            </div>
            
          </Grid>
          <Grid size={4} className="p-4">
            <div className="flex justify-between items-center bg-slate-800 p-3 text-white rounded-sm cursor-pointer">
              <p className="text-lg">Search</p>
              <SearchIcon/>
             
            </div>
            
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid size={4} className="p-4">
            <div className="flex justify-between items-center bg-slate-800 p-3 text-white rounded-sm cursor-pointer">
              <p className="text-lg">Tag</p>
              <SellIcon/>
            </div>
            
          </Grid>
          <Grid size={4} className="p-4">
            <div className="flex justify-between items-center bg-slate-800 p-3 text-white rounded-sm cursor-pointer">
              <p className="text-lg">Favorite</p>
              <FavoriteIcon/>
             
            </div>
            
          </Grid>
          <Grid size={4} className="p-4">
            <div className="flex justify-between items-center bg-slate-800 p-3 text-white rounded-sm cursor-pointer">
              <p className="text-lg">Edit Recipe</p>
              <EditIcon/>
             
            </div>
            
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Home;
