import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import HeadlineCard from './components/headline-card';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlineCard/>
    </div>
  );
}

export default Home