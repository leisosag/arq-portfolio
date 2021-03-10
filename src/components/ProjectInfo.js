import React from 'react';

const ProjectInfo = ({ data }) => {
  return (
    <div className='' id='project-info'>
      <div className='container'>
        <h3>{data.name}</h3>
        <div className='project-info-details'>
          <p>Ubicación: {data.ubicacion}</p>
          <p>Superficie del terreno: {data.terreno}</p>
          <p>Superficie construida: {data.construido}</p>
        </div>
        <h4>Memoria</h4>
        <p>{data.memoria}</p>
      </div>
    </div>
  );
};

export default ProjectInfo;
