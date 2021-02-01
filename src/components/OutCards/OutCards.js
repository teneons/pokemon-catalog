import React from 'react';
import { Container } from 'react-bootstrap';
import PokemonCard from '../PokemonCard/PokemonCard';

const OutCards = (props) => {
  
   return(
    <Container className='d-flex justify-content-around align-items-center row row-col-3 col-12'>
      {props.pokeDataArr.map((item, id) => {
        return <PokemonCard pokeData={item} pokeId={id+1} key={id+1} />
      })
      }
    </Container>
   )
}

export default OutCards;