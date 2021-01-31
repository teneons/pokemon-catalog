import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import PokemonCard from '../PokemonCard/PokemonCard';

const OutCards = (props) => {
   return(
    <Container className='d-flex justify-content-around align-items-center row row-col-3 col-12'>
      <PokemonCard pokiItems={props.pokiDataBox[0]} pokiId={1} />
      <PokemonCard pokiItems={props.pokiDataBox[0]} pokiId={1} />
      <PokemonCard pokiItems={props.pokiDataBox[0]} pokiId={1} />
      <PokemonCard pokiItems={props.pokiDataBox[0]} pokiId={1} />
      <PokemonCard pokiItems={props.pokiDataBox[0]} pokiId={1} />
    </Container>
   )
}

export default OutCards;