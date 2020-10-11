import React, { useEffect, useState } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
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
  }, [pokiItems])    //nothing 

  const pokiDataBox = [pokiItems[0], pokiItems[1], pokiItems[2]]


  if(pokiLoad === true) {
    return (<h1>Data is loading..</h1>)
  } else if(pokiLoad === false) {
    return (
      <Container className='d-flex justify-content-around align-items-center shadow-sm bg-secondary'>
        <Row>
          <Col><PokimonCard pokiItems={pokiDataBox[0]} /></Col>
          <Col><PokimonCard pokiItems={pokiDataBox[1]} /></Col>
          <Col><PokimonCard pokiItems={pokiDataBox[2]} /></Col>
        </Row>
      </Container>
    )
  }

}

export default CardsContainer;