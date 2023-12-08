import React from 'react'
import Slider from '../../components/Slider/Slider'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import Categories from '../../components/Categories/Categories';
import Contact from '../../components/Contact/Contact';

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <FeaturedProducts type="featured"></FeaturedProducts>
      <FeaturedProducts type="trending"></FeaturedProducts>
      <Categories></Categories>
      <Contact></Contact>
      
    </div>
  )
}

export default Home;
