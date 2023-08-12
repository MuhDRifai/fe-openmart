import React from 'react'
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import "./Slider.scss";

const Slider = () => {
  const data = [
    "https://i.ibb.co/8gFyj7Q/sgm.jpg",
    "https://i.ibb.co/fnJYYB4/beras.jpg",
    "https://i.ibb.co/KW813ck/basreng.jpg",
    "https://i.ibb.co/6y72xyc/popok.jpg",
    "https://i.ibb.co/p4FKBYc/nescafe.jpg",
    "https://i.ibb.co/KrYVfJP/tehtongjie.jpg"
  ];




  return (
    <div className='slider'>
      <div className='container'>
        <img src={data[0]} alt="Description 1" />
        <img src={data[1]} alt="Description 2" />
        <img src={data[2]} alt="Description 3" />
        <img src={data[3]} alt="Description 4" />
        <img src={data[4]} alt="Description 5" />
        <img src={data[5]} alt="Description 6" />
      </div>
      <div className="icons">
        <div className="icon">
          <WestOutlinedIcon />
        </div>
        <div className="icon">
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  )
}

export default Slider