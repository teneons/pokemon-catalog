import React, { useState, useEffect } from 'react';
import {Button, Modal, Table} from 'react-bootstrap';

const PokemonModal = (props) => {
  
  //will mount
  useEffect(() => {
    handleShow()
    pokemonModalRequest()
  }, [props.showModal])


  //show/hide modal
  const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(props.showModal);


  //request
  const pokemonModalRequest = () => {
    fetch(props.pokemonUrl)    //get data
    .then(dJson => dJson.json())
    .then(data => {setPokemonData(data)})  //set data
  }

  const [pokemonData, setPokemonData] = useState(42)


  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pokemonData.name}</Modal.Title>
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
                <td>Height</td>
                <td>{pokemonData.height}</td>
              </tr>
              <tr>
                <td>Weight</td>
                <td>{pokemonData.weight}</td>
              </tr>
              <tr>
                <td>Type</td>
                <td>{pokemonData.height}</td>
              </tr>
              <tr>
                <td>HP</td>
                <td>HP</td>
              </tr>
              <tr>
                <td>Attack</td>
                <td>Attack</td>
              </tr>
              <tr>
                <td>Defense</td>
                <td>Defense</td>
              </tr>
              <tr>
                <td>Speed</td>
                <td>Speed</td>
              </tr>
              <tr>
                <td>Base experience</td>
                <td>{pokemonData.base_experience}</td>
              </tr>
              <tr>
                <td>Abilities</td>
                <td>Abilities</td>
              </tr>
              <tr>
                <td>Total moves</td>
                <td>{pokemonData}</td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Ok</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default PokemonModal;
