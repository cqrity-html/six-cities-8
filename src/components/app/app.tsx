import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../main/main';
import Offer from '../offer/offer';
import Error from '../error/error';
import { OfferType } from '../../types/types';
import { OfferState } from '../../const';
import { bindActionCreators, Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { CityChange} from '../../store/action';
import { Actions } from '../../types/action';
import { State } from '../../types/state';
import Spinner from '../spinner/spinner';

const mapDispatchToProps = (dispatch: Dispatch<Actions>) =>
  bindActionCreators(
    {
      onCityChange: CityChange,
    },
    dispatch,
  );

const mapStateToProps = ({ city, offers, isDataLoaded }: State) => ({
  city,
  offers,
  isDataLoaded,
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function App(props: ConnectedComponentProps): JSX.Element {
  const { onCityChange, city, offers, isDataLoaded } = props;

  const [selectedOffer, setSelectedOffer] = useState<OfferType>(OfferState);
  const [restOffers, setRestOffers] = useState<OfferType[]>(offers);

  const onListTitleClick = (listItemId: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const currentOffer: any = offers.find((offer) => offer.id === listItemId);
    const getRestOffers = offers
      .slice()
      .filter((place) => place.id !== currentOffer.id);
    setSelectedOffer(currentOffer);
    setRestOffers(getRestOffers);
    window.scrollTo(0, 0);
  };

  if (!isDataLoaded) {
    return (
      <Spinner />
    );
  }

  return (
    <Routes>
      <Route path="*" element={<Error />} />
      <Route path="/"
        element={<Main onListTitleClick={onListTitleClick} onCityChange={onCityChange} city={city} offers={offers}/>}
      />
      <Route path="/offer/:id"
        element={<Offer places={restOffers} onListTitleClick={onListTitleClick} city={city} selectedOffer={selectedOffer}/>}
      />
    </Routes>
  );
}

export { App };
export default connector(App);
