import React from 'react';

const Header = () => {
  return (
    <>
      <nav
        className='navbar navbar-expand-lg navbar-light border-bottom border-2'
        style={{ backgroundColor: '#f5f5f5' }}
      >
        <div className='container-fluid mx-5'>
          <a href='/' className='navbar-brand fs-3 fw-bold'>
            <span>Daniel</span>
            <span className='' style={{ color: '#2196f3' }}>
              Ramirez
            </span>
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='collapse navbar-collapse '
            id='navbarSupportedContent'
          >
            <div className='navbar-nav ms-auto mb-2 mb-lg-0'>
              <a
                className='btn btn-outline-dark mx-1 border-0'
                role='button'
                href='/'
              >
                Home
              </a>
              <a
                className='btn btn-outline-dark mx-1 border-0'
                role='button'
                href='/experience'
              >
                Experience
              </a>
              <a
                className='btn btn-outline-dark mx-1 border-0'
                role='button'
                href='/portfolio'
              >
                Portfolio
              </a>
              <button
                type='button'
                className='btn btn-outline-dark mx-1 border-0'
                data-bs-toggle='modal'
                data-bs-target='#exampleModal'
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
