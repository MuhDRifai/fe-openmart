import React, { useState } from 'react';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import "./Slider.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://i.ibb.co/XC9FKqQ/tehtongjie.jpg",
    "https://i.ibb.co/4N3CtBP/gulaku.jpg",
    "https://i.ibb.co/SnkQQsm/beras.jpg"
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : currentSlide + 1);
  };

  return (
    <div className='slider'>
      <div className='container' style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
}

export default Slider;
