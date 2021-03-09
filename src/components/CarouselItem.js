import React from 'react';
import { Link } from 'react-router-dom';

const CarouselItem = ({ item }) => {
  if (item.id === 1) {
    return (
      <div className='carousel-item active' key={item.name}>
        <img src={item.img} className='d-block w-100' alt={item.name} />
        <div class='carousel-caption d-none d-md-block'>
          <h2>{item.name}</h2>
          <Link to={`/proyectos/${item.id}`}>
            <button className='btn btn-border'>Ver Proyecto</button>
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className='carousel-item' key={item.name}>
        <img src={item.img} className='d-block w-100' alt={item.name} />
        <div class='carousel-caption d-none d-md-block'>
          <h2>{item.name}</h2>
          <Link to={`/proyectos/${item.id}`}>
            <button className='btn btn-border'>Ver Proyecto</button>
          </Link>
        </div>
      </div>
    );
  }
};

export default CarouselItem;
