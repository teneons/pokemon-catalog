import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import PokimonCard from '../PokemonCard/PokimonCard';

const OutCards = (props) => {
   return(
    <Container className='d-flex justify-content-around align-items-center bg-secondary flex-column'>
    <Row>
      <Col><PokimonCard pokiItems={props.pokiDataBox[0]} pokiId={1} /></Col>
      <Col><PokimonCard pokiItems={props.pokiDataBox[1]} pokiId={2} /></Col>
      <Col><PokimonCard pokiItems={props.pokiDataBox[2]} pokiId={3} /></Col>
    </Row>
  </Container>
   )
}

export default OutCards;