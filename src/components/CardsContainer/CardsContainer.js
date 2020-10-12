import React, { useEffect, useState } from 'react';
import { Container, Button, Alert } from 'react-bootstrap';
import OutCards from '../OutCards/OutCards';

const CardsContainer = () => {

  const [pokiItems, setPokiData] = useState(42);
  const [pokiLoad, setLoad] = useState(true);
  const [pokiErr, setError] = useState(false);


  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=42')    //get data
      .then(d => d.json())
      .then(pokiData => {   //set data
        setPokiData(pokiData.results);
        setLoad(false);
      })
      .catch(() => {     //error
        setError(true)
      })
  }, [])    //nothing 

  const pokiDataBox = [pokiItems[0], pokiItems[1], pokiItems[2]]


  //render components
  if (pokiLoad === true) {
    return (
      <Container className='d-flex flex-column justify-content-around align-items-center bg-secondary '>
        <div class="spinner-border text-light" style={{ width: '10rem', height: '10rem' }} role="status">
          <span class="sr-only">Loading data..</span>
        </div>
      </Container>
    )
  } else if (pokiLoad === false) {
    return (
      <div className='d-flex flex-column align-items-center'>
        <OutCards pokiDataBox={pokiDataBox} />
        <Button variant="btn btn-info" className='m-2'>Load more..</Button>
      </div>
    )
  } else if (pokiErr === true) {
    return (
      <Alert variant="danger" onClose={() => setError(false)} dismissible>
        <Alert.Heading>You have got an error😬</Alert.Heading>
      </Alert>
    )
  }

}

export default CardsContainer;