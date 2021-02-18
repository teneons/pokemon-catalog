import React, { useState, useEffect } from 'react';
import { Card, Button, Badge, Modal } from 'react-bootstrap';
import PokemonModal from '../PokemonModal/PokemonModal';

const PokemonCard = (props) => {
  const imgUrl = `https://pokeres.bastionbot.org/images/pokemon/${props.pokeId}.png`;

  const [pokemon, setPokemonData] = useState(null)    //pokemon state data

  const [show, setShow] = useState(false);    //show/hide modal
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  useEffect(()=> {
    pokemonModalRequest()
  },[])

  const pokemonModalRequest = async () => {
    await fetch(props.pokeData.url)    //get data
      .then(dJson => dJson.json())
      .then(data => setPokemonData(data))  //set data
  }

  return (
    <Card className='d-flex justify-content-center m-3' key={props.pokeId}>
      <Card.Img variant="top" src={imgUrl} style={{ width: '16rem' }} />
      <Card.Body className='d-flex flex-column align-items-center'>
        <Card.Title>{props.pokeData.name}</Card.Title>
        <div className='d-flex justify-content-around m-2'>
          {pokemon !== null? (pokemon.types.map((i) => <Badge variant="dark">{i.type.name}</Badge>)) : 'Type'}
        </div>
        <Button variant="outline-danger" className='mr-1' onClick={handleShow}>Info</Button>
      </Card.Body>
      <Modal show={show} onHide={handleClose}>
        <PokemonModal key={props.pokeId} pokemonUrl={props.pokeData.url} pokemon={pokemon}/>
      </Modal>
    </Card>
  )
}

export default PokemonCard;
