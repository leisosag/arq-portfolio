import React from 'react';
import Carousel from './Carousel.js';
import ProjectInfo from './ProjectInfo.js';

const Project = ({ project }) => {
  return (
    <div className='container-fluid'>
      <div className='row project-container'>
        <div className='col-lg-7 project-container'>
          <Carousel img={project} type={'singleProyect'} />
        </div>
        <div className='col-lg-5 project-container'>
          <ProjectInfo data={project} />
        </div>
      </div>
    </div>
  );
};

export default Project;
