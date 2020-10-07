import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from '../src/components/App/App';
import pokemonData from './pokemonData';


ReactDOM.render(
  <React.StrictMode>
    <App pdata={pokemonData}/>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
