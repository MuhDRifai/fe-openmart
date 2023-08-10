import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='wrapper'>
        <div className='left'>
        <div className='item'>
        <img src="/img/en.png" alt="" style={{ height: '19px' }} />
            <KeyboardArrowDownIcon/>
        </div>
        <div className='item'>
            <span>IDR</span>
            <KeyboardArrowDownIcon/>
        </div>
        </div>
        <div className='center'>
        
    </div>
    <div className='right'>
        
    </div>
        </div>
    </div>
  )
}

export default Navbar