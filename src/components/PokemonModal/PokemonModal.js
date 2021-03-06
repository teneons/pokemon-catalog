import React, { useState, useEffect } from 'react';
import {Modal, Table, Image} from 'react-bootstrap';

const PokemonModal = (props) => {
    
  //will mount
  useEffect(() => {
    propsPokemon()
  }, [])
  
  const [pokemon, setPokemonData] = useState(null)    //pokemon state

  const propsPokemon = () => {
    setPokemonData(props.pokemon)
  }

  return (
    <>
        <Modal.Header closeButton className='d-flex flex-column justify-content-center align-items-center'>
          <Image src={pokemon !== null? `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png` : 'Img'} rounded style={{ width: '12rem' }} />
          <Modal.Title>{pokemon !== null? pokemon.name : 'Name'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Property</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Weight</td>
                <td>{pokemon !== null? pokemon.weight : 'Weight'}</td>
              </tr>
              <tr>
                <td>Height</td>
                <td>{pokemon !== null? pokemon.height : 'Height'}</td>
              </tr>
              <tr>
                <td>Type</td>
                <td>{pokemon !== null? (pokemon.types.map((i) => `${i.type.name} `)) : 'Type'}</td>
              </tr>
              <tr>
                <td>HP</td>
                <td>{pokemon !== null? (pokemon.stats[0].base_stat) : 'HP'}</td>
              </tr>
              <tr>
                <td>Attack</td>
                <td>{pokemon !== null? (pokemon.stats[1].base_stat) : 'Attack'}</td>
              </tr>
              <tr>
                <td>Defense</td>
                <td>{pokemon !== null? (pokemon.stats[2].base_stat) : 'Defense'}</td>
              </tr>
              <tr>
                <td>Speed</td>
                <td>{pokemon !== null? (pokemon.stats[5].base_stat) : 'Speed'}</td>
              </tr>
              <tr>
                <td>Base experience</td>
                <td>{pokemon !== null? pokemon.base_experience : 'Base experience'}</td>
              </tr>
              <tr>
                <td>Abilities</td>
                <td>{pokemon !== null? (pokemon.abilities.map((i) => `${i.ability.name} `)) : 'Abilities'}</td>
              </tr>
              <tr>
                <td>Total moves</td>
                <td>{pokemon !== null? (pokemon.moves.length) : 'Total moves'}</td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
    </>
  )
}

export default PokemonModal;
