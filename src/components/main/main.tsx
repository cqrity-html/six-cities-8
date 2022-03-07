import React, { BaseSyntheticEvent, useState } from 'react';
import Map from '../map/map';
import PlacesList from '../places-list/places-list';
import CitiesList from '../cities-list/cities-list';
import { Point, OfferType, City } from '../../types/types';
import { ChangeCityAction } from '../../types/action';

type MainProps = {
  onListTitleClick: (listItemId: string) => void;
  onCityChange: (index: number) => ChangeCityAction;
  city: City;
  offers: OfferType[];
};

function Main({
  onListTitleClick,
  onCityChange,
  city,
  offers,
}: MainProps): JSX.Element {
  const [selectedPoint, setSelectedPoint] = useState<Point | undefined>(undefined);
  const [selectedCity, setSelectedCity] = useState(city.title);
  const cityClickHandler = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    setSelectedCity(event.currentTarget.textContent);
  };

  const onListItemHover = (listItemId: string) => {
    const currentPoint = offers.find((offer) => offer.id === listItemId);
    setSelectedPoint(currentPoint);
  };

  const listItemHoverHandler = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    onListItemHover(event.currentTarget.id);
  };

  const listItemClickHandler = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    onListTitleClick(event.currentTarget.id);
  };

  return (
    <React.Fragment>
      <div style={{ display: 'none' }}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol id="icon-arrow-select" viewBox="0 0 7 4">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"
            >
            </path>
          </symbol>
          <symbol id="icon-bookmark" viewBox="0 0 17 18">
            <path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path>
          </symbol>
          <symbol id="icon-star" viewBox="0 0 13 12">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"
            >
            </path>
          </symbol>
        </svg>
      </div>
      <div className="page page--gray page--main">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a
                  className="header__logo-link header__logo-link--active"
                  href="/"
                >
                  <img
                    className="header__logo"
                    src="img/logo.svg"
                    alt="6 cities logo"
                    width="81"
                    height="41"
                  />
                </a>
              </div>
            </div>
          </div>
        </header>

        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <CitiesList
                onCityClick={cityClickHandler}
                onCityChange={onCityChange}
              />
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <PlacesList
                selectedCity={selectedCity}
                offers={offers}
                onMouseEnter={listItemHoverHandler}
                onTitleClick={listItemClickHandler}
              />
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map
                    points={offers}
                    city={city}
                    selectedPoint={selectedPoint}
                  />
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
}

export default Main;
