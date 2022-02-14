import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {BrowserRouter} from 'react-router-dom';
import placeCards from './mocks/offers';

const availableOffers = 312;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App placesCount={availableOffers} places={placeCards}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'));
