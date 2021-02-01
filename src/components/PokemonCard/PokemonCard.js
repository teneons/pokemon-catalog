import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import PokemonModal from '../PokemonModal/PokemonModal';

const PokemonCard = (props) => {
  const imgUrl = `https://pokeres.bastionbot.org/images/pokemon/${props.pokeId}.png`;

  const [showModal, setShowModal] = useState(false)

  return (
    <Card className='d-flex justify-content-center m-3' key={props.pokeId}>
      <Card.Img variant="top" src={imgUrl} style={{ width: '16rem' }} />
      <Card.Body className='d-flex flex-column align-items-center'>
        <Card.Title>{props.pokeData.name}</Card.Title>
        <Button variant="outline-danger" className='mr-1' onClick={() => setShowModal(true)}>Info</Button>
      </Card.Body>
      <PokemonModal showModal={showModal} key={props.pokeId} pokemonUrl={props.pokeData.url}/>
    </Card>
  )
}

export default PokemonCard;
