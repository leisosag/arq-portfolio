import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
      className='navbar navbar-expand-lg navbar-dark fixed-top'
      style={{ backgroundColor: 'rgba(42,42,42,0.9)' }}
    >
      <div className='container'>
        <Link to={'/'} className='navbar-brand'>
          Leila <span className='font-weight-bold'>Sosa Gonzalez</span>
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link to={'/proyectos'} className='nav-link'>
                Proyectos
              </Link>
            </li>
            {/*<li className='nav-item'>
              <Link to={'/contacto'} className='nav-link'>
                Contacto
              </Link>
  </li>*/}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
