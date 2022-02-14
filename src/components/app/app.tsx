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
  const [selectedOffer, setSelectedOffer] = useState<OfferTitle | undefined>(
    undefined,
  );

  const getCurrentOffer = () => {
    const onListTitleClick = (listItemId: string) => {
      const currentOffer = places.find((place) => place.id === listItemId);
      setSelectedOffer(currentOffer);
      console.log(currentOffer);
      return currentOffer;
    };
    return onListTitleClick;
  };

  const currentOffer = getCurrentOffer();
  console.log(currentOffer);

  return (
    <Routes>
      <Route path='*' element={<Error />}/>
      <Route path='/' element={<Main placesCount={placesCount} places={places} onListTitleClick={currentOffer}/>}/>
      <Route path='/login' element={<LogIn />}/>
      <Route path='/favorites' element={isLogged ? <Favorites places={places}/> : <LogIn />} />
      <Route path='/offer/:id' element={<Offer places={places} title={currentOffer.title}/>}/>
    </Routes>
  );
}

export default App;
