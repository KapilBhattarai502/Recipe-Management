import React from "react";

import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditIcon from '@mui/icons-material/Edit';
import {useNavigate} from 'react-router-dom';

const Sidebar = () => {
  const navigate=useNavigate();
  return (
    <div>
    
           <h3 className="font-bold text-xl">User:Kapil Bhattarai</h3>
            <div className="flex justify-between items-center bg-slate-700 p-3 cursor-pointer" onClick={()=>{navigate("")}}>
              <p className="text-lg">Home</p>
              <HomeIcon/>
            </div>
            <div className="mt-2">
              <h2 className="text-lg">Recipes</h2>
              <div className="flex justify-between items-center bg-slate-700 p-3 cursor-pointer" onClick={()=>{navigate("/addrecipe")}}>
                <p className="text-lg">Add A Recipe</p>
                <AddIcon />
              </div>
              <div className="flex justify-between items-center bg-slate-700 p-3 mt-2 cursor-pointer" onClick={()=>{navigate("/recipes")}}>
                <p className="text-lg">My Recipes</p>
                <MenuBookIcon />
              </div>

              <div className="flex justify-between items-center bg-slate-700 p-3 mt-2 cursor-pointer" onClick={()=>{navigate("/searchrecipe")}}>
                <p className="text-lg">Search</p>
                <SearchIcon/>
                
              </div>
              <div className="flex justify-between items-center bg-slate-700 p-3 mt-2 cursor-pointer" onClick={()=>{navigate("/favorite")}}>
                <p className="text-lg">Favourites</p>
               <FavoriteIcon/>
                
              </div>
              <div className="flex justify-between items-center bg-slate-700 p-3 mt-2 cursor-pointer" onClick={()=>{navigate("/editrecipe")}}>
                <p className="text-lg">Edit Recipe</p>
               <EditIcon/>
                
              </div>

            </div>
       
    
        
     
    </div>
  );
};

export default Sidebar;
