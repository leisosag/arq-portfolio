import React from 'react';
import Project from '../components/Project.js';
import Navbar from '../components/Navbar.js';
import projects from '../projects';

const ProjectPage = ({ match }) => {
  const project = projects.find((p) => p.id === match.params.id);

  return (
    <div>
      <Navbar />
      <Project project={project} />
    </div>
  );
};

export default ProjectPage;
