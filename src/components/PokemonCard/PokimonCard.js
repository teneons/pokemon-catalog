import React from 'react';
import {Card, Button} from 'react-bootstrap';

const PokimonCard = () => {

  return (
    <Card style={{ width: '18rem' }} className='d-flex justify-content-center'>
      <Card.Img variant="top" src="https://pokeres.bastionbot.org/images/pokemon/1.png" />
      <Card.Body>
        <Card.Title>Pickchu</Card.Title>
        <Button variant="danger" className='mr-1'>Fire</Button>
        <Button variant="danger">Fire</Button>
      </Card.Body>
    </Card>
  )
}

export default PokimonCard;
