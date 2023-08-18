import React, { useState } from 'react';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import "./Slider.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://images.tokopedia.net/img/cache/1200/NXCtjv/2022/3/9/6a5e9da7-2206-44c5-b384-e68039f91760.jpg",
    "https://images.tokopedia.net/img/cache/1200/NXCtjv/2023/8/14/b52f770c-b1de-4d87-a779-4da47b375e10.jpg",
    "https://images.tokopedia.net/img/cache/1200/NXCtjv/2023/5/5/2fc529b5-d161-4f13-9173-8a129f327259.jpg"
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
