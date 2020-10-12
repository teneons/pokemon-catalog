import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import PokimonCard from '../PokemonCard/PokimonCard';

const CardsContainer = () => {

  const [pokiItems, setPokiData] = useState(42);
  const [pokiErr, setError] = useState(false);
  const [pokiLoad, setLoad] = useState(true);


  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=42')    //get data
      .then(d => d.json())
      .then(pokiData => {   //set data
        setPokiData(pokiData.results);
        setLoad(false);
      })
      .catch((err) => {     //error
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
        <Container className='d-flex justify-content-around align-items-center bg-secondary flex-column'>
          <Row>
            <Col><PokimonCard pokiItems={pokiDataBox[0]} pokiId={1} /></Col>
            <Col><PokimonCard pokiItems={pokiDataBox[1]} pokiId={2} /></Col>
            <Col><PokimonCard pokiItems={pokiDataBox[2]} pokiId={3} /></Col>
          </Row>
        </Container>
        <Container className='d-flex justify-content-around align-items-center bg-secondary flex-column'>
          <Row>
            <Col><PokimonCard pokiItems={pokiDataBox[0]} pokiId={1} /></Col>
            <Col><PokimonCard pokiItems={pokiDataBox[1]} pokiId={2} /></Col>
            <Col><PokimonCard pokiItems={pokiDataBox[2]} pokiId={3} /></Col>
          </Row>
        </Container>
        <Button variant="btn btn-info" className='m-2'>Load more..</Button>
      </div>
    )
  }

}

export default CardsContainer;