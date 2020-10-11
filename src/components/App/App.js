import React from 'react';
import CardsContainer from '../CardsContainer/CardsContainer';
import Header from '../Header/Header';


function App() {
  return (
    <div className="App bg-dark container-fluid col-12" style={{height: '100vh'}}>
      <Header />
      <CardsContainer />
    </div>
  );
}

export default App;
