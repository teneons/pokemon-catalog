import React from 'react';
import { Navbar } from 'react-bootstrap';
import logo from './pokemonLogo.svg';

const Header = () => {

  return (
    <Navbar bg="dark" variant="dark" className='d-flex justify-content-center'>
      <Navbar.Brand className='text-uppercase font-weight-bold'>
      <img alt="Pokemon Catalog" src={logo} width="30" height="30" className="d-inline-block align-top"/>
          {' '}
          Pokemon Catalog
    </Navbar.Brand>
    </Navbar>
  )
}

export default Header;
