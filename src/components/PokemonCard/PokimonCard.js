import React from 'react';
import {Card, Button} from 'react-bootstrap';

const PokimonCard = (props) => {
  const imgUrl = `https://pokeres.bastionbot.org/images/pokemon/${props.pokiId}.png`;

  return (
    <Card style={{ width: '18rem' }} className='d-flex justify-content-center m-3'>
      <Card.Img variant="top" src={imgUrl} />
      <Card.Body className='d-flex flex-column align-items-center'>
        <Card.Title style={{fontSize: '2.2rem'}}>{props.pokiItems.name}</Card.Title>
        <Button variant="outline-danger" className='mr-1'>Info</Button>
      </Card.Body>
    </Card>
  )
}

export default PokimonCard;
