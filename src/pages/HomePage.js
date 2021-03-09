import React from 'react';
import Navbar from '../components/Navbar.js';
import Carousel from '../components/Carousel.js';
import imgLanding from '../imgLanding.json';

const HomePage = () => {
  return (
    <div id='homepage'>
      <Navbar />
      <Carousel img={imgLanding} />
    </div>
  );
};

export default HomePage;
