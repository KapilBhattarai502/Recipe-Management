import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditIcon from '@mui/icons-material/Edit';
import {useNavigate} from 'react-router-dom'

const SmallSideMenuBar = () => {
  const navigate=useNavigate();
  return (
    <div className='flex flex-col items-center gap-4 mt-5'>
    <HomeIcon fontSize='large' className='cursor-pointer' onClick={()=>{navigate("")}}/>
    <AddIcon fontSize='large' className='cursor-pointer' onClick={()=>{navigate("/addrecipe")}}/>
    <MenuBookIcon fontSize='large' className='cursor-pointer' onClick={()=>{navigate("/recipes")}}/>
    <SearchIcon fontSize='large' className='cursor-pointer' onClick={()=>{navigate("/searchrecipe")}}/>
    <FavoriteIcon fontSize='large' className='cursor-pointer' onClick={()=>{navigate("/favorite")}}/>
    <EditIcon fontSize='large' className='cursor-pointer' onClick={()=>{navigate("/editrecipe")}}/>


    

    

    </div>
  )
}

export default SmallSideMenuBar