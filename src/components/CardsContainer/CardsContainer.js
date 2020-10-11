import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PokimonCard from '../PokemonCard/PokimonCard';

const CardsContainer = () => {

  const [pokiItems, setPokiData] = useState();
  const [pokiErr, setError] = useState(false);
  const [pokiLoad, setLoad] = useState(true);


  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')    //get data
      .then(d => d.json())
      .then(pokiData => {   //set data
        setPokiData(pokiData.results[1]);
        setLoad(false);
      })
      .catch((err) => {     //error
        setError(true)
        alert(err)
      })
  }, [])    //nothing 

  // const outData = pokiItems.map((item, id)=> {
  //   return <Col><PokimonCard pokiItems={pokiItems}/></Col>
  // })

  return (
    <Container className='d-flex justify-content-around align-items-center shadow-sm bg-secondary'>
      <Row>
        <Col><PokimonCard pokiItems={pokiItems} /></Col>
      </Row>
    </Container>
  )
}

export default CardsContainer;