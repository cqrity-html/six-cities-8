import React, {useState} from 'react';
import Map from '../map/map';
import {Point} from '../../types/types';
import {OfferType} from '../../types/types';
import PlaceCard from '../place-card/place-card';
import {bindActionCreators, Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {CityChange} from '../../store/action';
import {Actions} from '../../types/action';
import {State} from '../../types/state';
import CitiesList from '../cities-list/cities-list';

type MainProps = {
  onListTitleClick: (listItemId: string) => void
  offers: OfferType[]
};

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => bindActionCreators({
  onCityChange: CityChange,
}, dispatch);

const mapStateToProps = ({city, offers}: State) => ({
  city,
  offers,
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & MainProps;

function Main (props: ConnectedComponentProps):JSX.Element {
  const {onListTitleClick, onCityChange, city, offers} = props;
  const [selectedPoint, setSelectedPoint] = useState<Point | any>(
    undefined,
  );
  const [selectedCity, setSelectedCity] = useState('Paris');

  const cityClickHandler = (event: any) => {
    event.preventDefault();
    setSelectedCity(event.currentTarget.textContent);
    event.currentTarget.classList.add('tabs__item--active');
  };

  const currentCityOffers = offers.filter((place) => place.city.name === selectedCity);

  const onListItemHover = (listItemId: string) => {
    const currentPoint = offers.find((place) => place.id === listItemId);
    setSelectedPoint(currentPoint);
  };

  const listItemHoverHandler = (event: any) => {
    event.preventDefault();
    onListItemHover(event.currentTarget.id);
  };

  const listItemClickHandler = (event: any) => {
    event.preventDefault();
    onListTitleClick(event.currentTarget.id);
  };

  return (
    <React.Fragment>
      <div style={{display: 'none'}}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol>
          <symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol>
          <symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol>
        </svg>
      </div>
      <div className="page page--gray page--main">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link header__logo-link--active" href="/">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="blank">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </a>
                  </li>
                  <li className="header__nav-item">
                    <a className="header__nav-link" href="blank">
                      <span className="header__signout">Sign out</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <CitiesList onCityClick={cityClickHandler} onCityChange={onCityChange}/>
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{currentCityOffers.length} places to stay in {selectedCity}</b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex={0}>
                    Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <ul className="places__options places__options--custom places__options--opened">
                    <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                    <li className="places__option" tabIndex={0}>Price: low to high</li>
                    <li className="places__option" tabIndex={0}>Price: high to low</li>
                    <li className="places__option" tabIndex={0}>Top rated first</li>
                  </ul>
                </form>
                <div className="cities__places-list places__list tabs__content">
                  {currentCityOffers.map((card) =>
                    (
                      <PlaceCard
                        key={`card-${card.id}`}
                        offerTitle={card.title}
                        preview={card.previewImage}
                        price={card.price}
                        type={card.type}
                        onMouseEnter={listItemHoverHandler}
                        onTitleClick={listItemClickHandler}
                        id={card.id}
                        isPremium={card.isPremium}
                        isFavorite={card.isFavorite}
                      />
                    ),
                  )}
                </div>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map points={offers} city={city} selectedPoint={selectedPoint}/>
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
}

export {Main};
export default connector(Main);
