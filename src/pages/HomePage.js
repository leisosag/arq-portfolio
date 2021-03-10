import React from 'react';
import Navbar from '../components/Navbar.js';
import Carousel from '../components/Carousel.js';
import projects from '../projects.json';

const HomePage = () => {
  return (
    <div id='homepage'>
      <Navbar />
      <Carousel img={projects} type={'projects'} />
    </div>
  );
};

export default HomePage;
