import React from 'react';

const Header = () => {
  return (
    <>
      {/* <Navbar
        expand='md'
        variant='light'
        style={{ backgroundColor: '#f5f5f5' }}
      >
        <LinkContainer to='/'>
          <Navbar.Brand style={{ fontSize: '1.1rem' }}>
            <span style={{ fontWeight: 'bold' }}>Daniel </span>
            <span style={{ fontWeight: 'bold', color: '#2196f3' }}>
              Ramirez
            </span>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' style={{ fontSize: '1rem' }}>
          <Nav className='ml-auto'>
            <LinkContainer to='/' exact>
              <Nav.Link href='/'>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/experience'>
              <Nav.Link>Experience</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/portfolio'>
              <Nav.Link>Portfolio</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/contact'>
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar> */}
      <nav
        class='navbar navbar-light border-bottom border-2'
        style={{ backgroundColor: '#f5f5f5' }}
      >
        <div class='container-fluid mx-5'>
          <a href='/' class='navbar-brand fs-3 fw-bold'>
            <span>Daniel</span>
            <span className='' style={{ color: '#2196f3' }}>
              Ramirez
            </span>
          </a>
          <div class='d-flex'>
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
              class='btn btn-outline-dark mx-1 border-0'
              data-bs-toggle='modal'
              data-bs-target='#exampleModal'
            >
              Contact
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
