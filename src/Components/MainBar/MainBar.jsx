import React from "react";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import Home from "../Home/Home";

const MainBar = ({setmenuBar,menuBar}) => {
  return (
    <div>
    <div className="text-white p-3">
        <FormatListBulletedIcon className="cursor-pointer" onClick={()=>{setmenuBar(!menuBar)}}/>


    </div>
  
  
        
         
       
    </div>
  );
};

export default MainBar;
