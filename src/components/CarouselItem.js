import React from 'react';
import { Link } from 'react-router-dom';

const CarouselItem = ({ item, type }) => {
  {
    /* proyectos individuales */
  }
  if (type === 'singleProject') {
    if (item.id === 'img1') {
      return (
        <div className='carousel-item active' key={item.img}>
          <img
            src={item.img}
            className='d-block w-100 img-fluid'
            alt={item.img}
          />
        </div>
      );
    } else {
      return (
        <div className='carousel-item' key={item.img}>
          <img
            src={item.img}
            className='d-block w-100 img-fluid'
            alt={item.img}
          />
        </div>
      );
    }
  }

  {
    /* proyectos de home page */
  }
  if (type === 'projects') {
    if (item.id === '1') {
      return (
        <div
          className='carousel-item carousel-item-homepage active'
          key={item.name}
        >
          <img
            src={item.img}
            className='d-block w-100 img-fluid'
            alt={item.name}
          />
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
        <div className='carousel-item carousel-item-homepage' key={item.name}>
          <img
            src={item.img}
            className='d-block w-100 img-fluid'
            alt={item.name}
          />
          <div class='carousel-caption d-none d-md-block'>
            <h2>{item.name}</h2>
            <Link to={`/proyectos/${item.id}`}>
              <button className='btn btn-border'>Ver Proyecto</button>
            </Link>
          </div>
        </div>
      );
    }
  }
};

export default CarouselItem;
