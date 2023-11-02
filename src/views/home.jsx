import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import HeadlineCard from './components/headline-card';
import Food from './components/food';
import Category from './components/category'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlineCard/>
      <Food/>
      <Category/>
    </div>
  );
}

export default Home