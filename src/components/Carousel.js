import React from 'react';
import CarouselItem from './CarouselItem.js';

const Carousel = ({ img, type }) => {
  return (
    <div id='carouselControls' className='carousel slide' data-ride='carousel'>
      {/* carousel container */}
      <div className='carousel-inner'>
        {type === 'projects'
          ? img.map((item) => <CarouselItem item={item} type={'projects'} />)
          : img.images.map((item) => (
              <CarouselItem item={item} type={'singleProject'} />
            ))}
        {/*img.map((item) => (
          <CarouselItem item={item} />
        ))*/}
      </div>
      {/* carousel controlls */}
      <a
        className='carousel-control-prev'
        href='#carouselControls'
        role='button'
        data-slide='prev'
      >
        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
        <span className='sr-only'>Anterior</span>
      </a>
      <a
        className='carousel-control-next'
        href='#carouselControls'
        role='button'
        data-slide='next'
      >
        <span className='carousel-control-next-icon' aria-hidden='true'></span>
        <span className='sr-only'>Siguente</span>
      </a>
    </div>
  );
};

export default Carousel;

/*

img.map((item) => (
              <CarouselItem item={item} type={'singleProject'} />
            ))

img.images.map((item) => (
              <CarouselItem item={item} type={'singleProject'} />
            ))

            */
