import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import "../styles/Header.css";

const Header = () => {
  return (
    <Navbar bg='light' expand='md' variant='light'>
      <LinkContainer to='/'>
        <Navbar.Brand>
          <span style={{ fontWeight: "bold" }}>Daniel </span>
          <span style={{ fontWeight: "bold", color: "#2196f3" }}>Ramirez</span>
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <LinkContainer to='/'>
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/resume'>
            <Nav.Link>Resume</Nav.Link>
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
