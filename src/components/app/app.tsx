import {useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import Main from '../main/main';
import Favorites from '../favorites/favorites';
import Offer from '../offer/offer';
import LogIn from '../login/login';
import Error from '../error/error';
import {OfferType} from '../../types/types';
import {OfferState} from '../../const';
//import MainEmpty from '../main-empty/main-empty';
//import FavoritesEmpty from '../favorites-empty/favorites-empty';
//import OfferNotLogged from '../offer-not-logged/offer-not-logged';

type AppProps = {
  placesCount: number
  places: OfferType[]
};

const isLogged = true;

function App({placesCount, places}: AppProps):JSX.Element {
  const [selectedOffer, setSelectedOffer] = useState<any>(OfferState);
  const [restOffers, setRestOffers] = useState<any>(places);

  const onListTitleClick = (listItemId: string) => {
    const currentOffer: any = places.find((place) => place.id === listItemId);
    const getRestOffers = places.slice().filter((place) => place.id !== currentOffer.id);
    setSelectedOffer(currentOffer);
    setRestOffers(getRestOffers);
    window.scrollTo(0, 0);
  };

  return (
    <Routes>
      <Route path='*' element={<Error />}/>
      <Route path='/' element={<Main placesCount={placesCount} places={places} onListTitleClick={onListTitleClick}/>}/>
      <Route path='/login' element={<LogIn />}/>
      <Route path='/favorites' element={isLogged ? <Favorites places={places}/> : <LogIn />} />
      <Route path='/offer/:id' element={
        <Offer
          places={restOffers}
          title={selectedOffer.title}
          bedrooms={selectedOffer.bedrooms}
          images={selectedOffer.images}
          description={selectedOffer.description}
          goods={selectedOffer.goods}
          maxAdults={selectedOffer.maxAdults}
          price={selectedOffer.price}
          rating={selectedOffer.rating}
          type={selectedOffer.type}
          isPremium={selectedOffer.isPremium}
          reviews={selectedOffer.reviews}
          onListTitleClick={onListTitleClick}
        />
      }
      />
    </Routes>
  );
}

export default App;
