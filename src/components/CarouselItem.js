import React from 'react';
import { Link } from 'react-router-dom';

const CarouselItem = ({ item, type }) => {
  return (
    <div
      className={
        item.id === '1'
          ? 'carousel-item carousel-item-homepage active'
          : item.id === 'img1'
          ? 'carousel-item active'
          : type === 'projects'
          ? 'carousel-item carousel-item-homepage'
          : 'carousel-item'
      }
      key={item.name}
    >
      <img src={item.img} className='d-block w-100 img-fluid' alt={item.img} />
      {type === 'projects' ? (
        <div class='carousel-caption d-none d-block'>
          <h2>{item.name}</h2>
          <Link to={`/proyectos/${item.id}`}>
            <button className='btn btn-border'>Ver Proyecto</button>
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default CarouselItem;
