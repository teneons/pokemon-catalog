import React from 'react';
import CardsContainer from '../CardsContainer/CardsContainer';
import Header from '../Header/Header';


function App() {
  return (
    <div className="App bg-dark container-fluid col-12" style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
      <Header />
      <CardsContainer />
    </div>
  );
}

export default App;
