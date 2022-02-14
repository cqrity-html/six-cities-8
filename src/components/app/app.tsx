import {useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import Main from '../main/main';
import Favorites from '../favorites/favorites';
import Offer from '../offer/offer';
import LogIn from '../login/login';
import Error from '../error/error';
import {OfferTitle} from '../../types/types';
//import MainEmpty from '../main-empty/main-empty';
//import FavoritesEmpty from '../favorites-empty/favorites-empty';
//import OfferNotLogged from '../offer-not-logged/offer-not-logged';

type AppProps = {
  placesCount: number
  places: {
    title: string;
    preview: string;
    price: number;
    type: string;
    id: string;
    lat: number;
    lng: number;
    reviews: string[];
}[]
};

const isLogged = true;

function App({placesCount, places}: AppProps):JSX.Element {
  let [selectedOffer, setSelectedOffer] = useState({title: '', preview: '', price: 0, type: '', id: '', lat: 0, lng: 0, reviews: ['']});

  /*   let currentOffer = {
    title: '',
    preview: '',
    price: 0,
    type: '',
    id: '',
    lat: 0,
    lng: 0,
    reviews: [''],
  }; */

  const onListTitleClick = (listItemId: string) => {
    const currentOffer = places.find((place) => place.id === listItemId);
    setSelectedOffer(selectedOffer = currentOffer);
    console.log(currentOffer);
    console.log(selectedOffer);
  };

  /*   const getCurrentOffer = (curOff) => {
    const onListTitleClick = (listItemId: string) => {
      curOff = places.find((place) => place.id === listItemId);
      setSelectedOffer(curOff);
      console.log(curOff);
      console.log(curOff.title);
      console.log(selectedOffer);
      return curOff;
    };
  };

  const rightOffer = getCurrentOffer(currentOffer);
  console.log(selectedOffer);
  */

  return (
    <Routes>
      <Route path='*' element={<Error />}/>
      <Route path='/' element={<Main placesCount={placesCount} places={places} onListTitleClick={onListTitleClick}/>}/>
      <Route path='/login' element={<LogIn />}/>
      <Route path='/favorites' element={isLogged ? <Favorites places={places}/> : <LogIn />} />
      <Route path='/offer/:id' element={<Offer places={places} title={selectedOffer.title}/>}/>
    </Routes>
  );
}

export default App;
