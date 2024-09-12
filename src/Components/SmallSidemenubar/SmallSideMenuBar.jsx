import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditIcon from '@mui/icons-material/Edit';

const SmallSideMenuBar = () => {
  return (
    <div className='flex flex-col items-center gap-4 mt-5'>
    <HomeIcon fontSize='large' className='cursor-pointer'/>
    <AddIcon fontSize='large' className='cursor-pointer'/>
    <MenuBookIcon fontSize='large' className='cursor-pointer'/>
    <SearchIcon fontSize='large' className='cursor-pointer'/>
    <FavoriteIcon fontSize='large' className='cursor-pointer'/>
    <EditIcon fontSize='large' className='cursor-pointer'/>


    

    

    </div>
  )
}

export default SmallSideMenuBar