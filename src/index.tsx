import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {BrowserRouter} from 'react-router-dom';
import placeCards from './mocks/offers';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App placesCount={placeCards.length} places={placeCards}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'));
