import React from 'react';

const Carousel = ({ img }) => {
  return (
    <div id='carouselControls' className='carousel slide' data-ride='carousel'>
      <div className='carousel-inner'>
        <div className='carousel-item active'>
          <img src={img[0].src} className='d-block w-100' alt={img[0].name} />
        </div>
        <div className='carousel-item'>
          <img src={img[1].src} className='d-block w-100' alt={img[1].name} />
        </div>
        <div className='carousel-item'>
          <img src={img[2].src} className='d-block w-100' alt={img[2].name} />
        </div>
        <div className='carousel-item'>
          <img src={img[3].src} className='d-block w-100' alt={img[3].name} />
        </div>
      </div>
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
