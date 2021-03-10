import React from 'react';

const Collapse = () => {
  return (
    <div id='collapse-container'>
      <p>
        <button
          className='btn btn-border btn-circle'
          type='button'
          data-toggle='collapse'
          data-target='#collapseExample'
          aria-expanded='false'
          aria-controls='collapseExample'
        >
          <i class='fas fa-info'></i>
        </button>
      </p>
      <div className='collapse' id='collapseExample'>
        <div className='card card-body'>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </div>
    </div>
  );
};

export default Collapse;
