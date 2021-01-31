import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import PokimonCard from '../PokemonCard/PokimonCard';

const OutCards = (props) => {
   return(
    <Container className='d-flex justify-content-around align-items-center row row-col-3 col-12'>
      <PokimonCard pokiItems={props.pokiDataBox[0]} pokiId={1} />
      <PokimonCard pokiItems={props.pokiDataBox[0]} pokiId={1} />
      <PokimonCard pokiItems={props.pokiDataBox[0]} pokiId={1} />
      <PokimonCard pokiItems={props.pokiDataBox[0]} pokiId={1} />
      <PokimonCard pokiItems={props.pokiDataBox[0]} pokiId={1} />
    </Container>
   )
}

export default OutCards;