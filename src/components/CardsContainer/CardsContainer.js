import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PokimonCard from '../PokemonCard/PokimonCard';

const CardsContainer = () => {

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