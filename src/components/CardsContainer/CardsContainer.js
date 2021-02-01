import React, { useEffect, useState } from 'react';
import { Container, Button, Alert } from 'react-bootstrap';
import OutCards from '../OutCards/OutCards';

const CardsContainer = () => {

  const [pokeItems, setPokeData] = useState([]);
  const [pokeLoad, setLoad] = useState(true);
  const [pokeErr, setError] = useState(false);
  
  //request
  const pokeRequest = () => {
    let limit = JSON.parse(localStorage.getItem('limit'))

    fetch('https://pokeapi.co/api/v2/pokemon?limit=' + limit)    //get data
      .then(d => d.json())
      .then(pokeData => {   //set data
        setPokeData(pokeData.results);
        setLoad(false);
      })
      .catch(() => {     //error
        setError(true)
      })
  }

  //load more
  const loadMore = () => {
    let limit = JSON.parse(localStorage.getItem('limit'))
    limit *= 2;
    localStorage.setItem('limit', JSON.stringify(limit))
    pokeRequest()
  }


  //will mount
  useEffect(() => {
    localStorage.setItem('limit', JSON.stringify(9))
    pokeRequest()
  }, [])
  

  //render components
  if (pokeLoad === true) {
    return (
      <Container className='d-flex flex-column justify-content-around align-items-center col-12' style={{height: 'calc(100vh - 8.4vh)'}}>
        <div className="spinner-border" variant="dark" style={{ width: '10rem', height: '10rem' }} role="status">
          <span className="sr-only">Loading data..</span>
        </div>
      </Container>
    )
  } else if (pokeLoad === false) {
    return (
      <Container className='d-flex flex-column align-items-center'>
        <OutCards pokeDataArr={pokeItems} />
        <Button variant="btn btn-info" className='m-2' onClick={()=> loadMore() }>Load more..</Button>
      </Container>
    )
  } else if (pokeErr === true) {
    return (
      <Alert variant="danger" onClose={() => setError(false)} dismissible>
        <Alert.Heading>You have got an error😬</Alert.Heading>
      </Alert>
    )
  }

}

export default CardsContainer;