/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg='dark' expand='lg'>
      <Container>
        <Navbar.Brand style={{ color: "white" }} href='#home'>
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Link style={{ marginRight: "10px" }} to='/'>
              Home
            </Link>
            <Link style={{ marginRight: "10px" }} to='/upload'>
              Upload
            </Link>
            <Link style={{ marginRight: "10px" }} to='/list'>
              List
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
