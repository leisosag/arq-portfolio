import React from 'react';
import ProjectCard from '../components/ProjectCard.js';
import projects from '../projects.json';

const Projects = () => {
  return (
    <div id='projects-container'>
      <div className='container'>
        <div className='grid-container justify-content-center pt-5'>
          {projects.map((p) => (
            <div className='grid-item'>
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
