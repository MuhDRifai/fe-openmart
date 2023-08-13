import React from 'react'
import Slider from '../../Components/Slider/Slider'
import "./Home.scss";
import FeaturedProducts from '../../Components/FeatureProducts/FeaturedProducts';

const Home = () => {
  return (
    <div className="home">
      <Slider/>
      <FeaturedProducts type ="featured"/>
      <FeaturedProducts type ="treanding"/>
    </div>
  )
}

export default Home