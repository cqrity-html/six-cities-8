import {useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import Main from '../main/main';
import Favorites from '../favorites/favorites';
import Offer from '../offer/offer';
import LogIn from '../login/login';
import Error from '../error/error';
import {OfferType} from '../../types/types';
import {OfferState} from '../../const';

type AppProps = {
  places: OfferType[]
};

const isLogged = true;

function App({places}: AppProps):JSX.Element {
  const [selectedOffer, setSelectedOffer] = useState<OfferType>(OfferState);
  const [restOffers, setRestOffers] = useState<OfferType[]>(places);

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
      <Route path='/' element={<Main onListTitleClick={onListTitleClick}/>}/>
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
