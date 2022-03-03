import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../main/main';
import Favorites from '../favorites/favorites';
import Offer from '../offer/offer';
import LogIn from '../login/login';
import Error from '../error/error';
import { OfferType } from '../../types/types';
import { OfferState } from '../../const';
import { bindActionCreators, Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { CityChange/* , SetOffers */ } from '../../store/action';
import { Actions } from '../../types/action';
import { State } from '../../types/state';

const isLogged = true;

const mapDispatchToProps = (dispatch: Dispatch<Actions>) =>
  bindActionCreators(
    {
      onCityChange: CityChange,
      //setOffers: SetOffers,
    },
    dispatch,
  );

const mapStateToProps = ({ city, offers }: State) => ({
  city,
  offers,
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function App(props: ConnectedComponentProps): JSX.Element {
  const { onCityChange, /* setOffers, */ city, offers } = props;

  const [selectedOffer, setSelectedOffer] = useState<OfferType>(OfferState);
  const [restOffers, setRestOffers] = useState<OfferType[]>(offers);

  const onListTitleClick = (listItemId: string) => {
    const currentOffer: any = offers.find((offer) => offer.id === listItemId);
    const getRestOffers = offers
      .slice()
      .filter((place) => place.id !== currentOffer.id);
    setSelectedOffer(currentOffer);
    setRestOffers(getRestOffers);
    window.scrollTo(0, 0);
  };

  return (
    <Routes>
      <Route path="*" element={<Error />} />
      <Route path="/"
        element={<Main onListTitleClick={onListTitleClick} onCityChange={onCityChange} city={city} offers={offers}/>}
      />
      <Route path="/login" element={<LogIn />} />
      <Route path="/favorites"
        element={isLogged ? <Favorites places={offers} /> : <LogIn />}
      />
      <Route path="/offer/:id"
        element={<Offer places={restOffers} onListTitleClick={onListTitleClick} city={city} selectedOffer={selectedOffer}/* reviews={selectedOffer.reviews} *//>}
      />
    </Routes>
  );
}

export { App };
export default connector(App);
