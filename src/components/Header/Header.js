import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { edulogo, logo, mainMenufun } from './util';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <>
     <Navbar className="nav-color" expand="lg"  sticky='top'>
      <Container>
        <Navbar.Brand href="#home">
        <div className='Header-logo'>
          <img className='Header-logo-fit' src={logo} />
        </div>
        <p>Events</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto ">
            {mainMenufun}
          </Nav>

        <input placeholder='Search'
        type='search'
        className='signup'
        />
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header