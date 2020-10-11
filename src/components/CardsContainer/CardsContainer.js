import React, {useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PokimonCard from '../PokemonCard/PokimonCard';

const CardsContainer = () => {

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(d=>d.json())
    .then(pokiData => console.log(pokiData.results[42].name))
    .catch((err) => {
      alert(err)
    })
  }, [])

  return(
    <Container className='d-flex justify-content-around align-items-center shadow-sm bg-secondary'>
      <Row>
        <Col><PokimonCard /></Col>
        <Col><PokimonCard /></Col>
        <Col><PokimonCard /></Col>
      </Row>
    </Container>
  )
}

export default CardsContainer;