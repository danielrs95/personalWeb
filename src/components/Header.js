import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';
import '../styles/Header.css';

const Header = () => {
  return (
    <Navbar expand='md' variant='light' style={{ backgroundColor: '#f5f5f5' }}>
      <LinkContainer to='/'>
        <Navbar.Brand style={{fontSize:"1.1rem"}}>
          <span style={{ fontWeight: 'bold' }}>Daniel </span>
          <span style={{ fontWeight: 'bold', color: '#2196f3' }}>Ramirez</span>
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav' style={{ fontSize: '1rem' }}>
        <Nav className='ml-auto'>
          <LinkContainer to='/'>
            <Nav.Link>Home</Nav.Link>
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
    </Navbar>
  );
};

export default Header;
