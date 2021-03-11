import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <div>
      <div className='card project-card'>
        <Link to={`/proyectos/${project.id}`}>
          <img src={project.img} className='card-img-top' alt={project.name} />
          <div className='overlay'>
            <div className='titulo'>
              <h5>{project.name}</h5>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
