import React from 'react';
import Carousel from './Carousel.js';
import ProjectInfo from './ProjectInfo.js';

const Project = ({ project }) => {
  return (
    <div className='row w-100'>
      <div className='col-lg-8'>
        <Carousel img={project} type={'singleProyect'} />
      </div>
      <div className='col-lg-4'>
        <ProjectInfo data={project} />
      </div>
    </div>
  );
};

export default Project;
