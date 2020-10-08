import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';


function App() {
  return (
    <div className="App bg-dark container-fluid col-12 m-0 p-0" style={{height: '100vh'}}>
      <Jumbotron fluid className="h-100 w-100 d-inline-block bg-white" >
        <Container className='col-12 d-flex justify-content-center text-warning shadow-sm'><h1>Pokemon Catalog</h1></Container>
        <Container>42</Container>
      </Jumbotron>
    </div>
  );
}

export default App;
