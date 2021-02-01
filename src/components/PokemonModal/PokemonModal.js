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
    .then(data => setPokemonData(data))  //set data
  }

  const [pokemonData, setPokemonData] = useState(42)


  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pokemonData.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Ok</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default PokemonModal;
