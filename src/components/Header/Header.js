import React from 'react';
import { Nav } from 'react-bootstrap';

const Header = () => {

  return (
    <Nav defaultActiveKey="/home" as="ul" className='d-flex justify-content-center'>
      <Nav.Item as="li">
        <Nav.Link href="/home" className='text-warning'>Pokemon Catalog</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default Header;
