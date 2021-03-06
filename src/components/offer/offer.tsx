import React, {BaseSyntheticEvent, useState} from 'react';
import Logo from '../logo/logo';
import Map from '../map/map';
import {OfferType} from '../../types/types';
import PlaceCard from '../place-card/place-card';
import {Point, City} from '../../types/types';

type OfferProps = {
  selectedOffer: OfferType
  places: OfferType[]
  city: City
  onListTitleClick: (listItemId: string) => void
};

function Offer ({selectedOffer, places, city, onListTitleClick}: OfferProps):JSX.Element {
  const listItemHoverHandler = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    onListItemHover(event.currentTarget.id);
  };

  const listItemClickHandler = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    onListTitleClick(event.currentTarget.id);
  };

  const [selectedPoint, setSelectedPoint] = useState<Point | undefined>(
    undefined,
  );

  const onListItemHover = (listItemId: string) => {
    const currentPoint = places.find((place) => place.id === listItemId);
    setSelectedPoint(currentPoint);
  };

  const reducedOffers = places.filter((place) => place.city.name === selectedOffer.city.name).slice(0, 3);

  return (
    <React.Fragment>
      <div style={{display: 'none'}}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path>
          </symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol>
          <symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol>
        </svg>
      </div>

      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Logo />
              </div>
            </div>
          </div>
        </header>

        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {selectedOffer.images.map((image) =>
                  (
                    <div className="property__image-wrapper" key={image}>
                      <img className="property__image" src={image} alt="studio"/>
                    </div>
                  ))}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                <div className="property__mark" style={{display: selectedOffer.isPremium ? 'static' : 'none'}}>
                  <span>Premium</span>
                </div>
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {selectedOffer.title}
                  </h1>
                  <button className="property__bookmark-button button" type="button">
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: `${selectedOffer.rating * 20}%`}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{selectedOffer.rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {selectedOffer.type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {selectedOffer.bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {selectedOffer.maxAdults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{selectedOffer.price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {selectedOffer.goods.map((good) => <li className="property__inside-item" key={`good-${good}`}>{good}</li>)}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src={selectedOffer.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                    </div>
                    <span className="property__user-name">
                      {selectedOffer.host.name}
                    </span>
                    <span className="property__user-status" style={{display: selectedOffer.host.isPro ? 'static' : 'none'}}>
                      Pro
                    </span>
                  </div>
                  <div className="property__description">{selectedOffer.description}</div>
                </div>
                <section className="property__reviews reviews">
                </section>
              </div>
            </div>
            <section className="property__map map">
              <Map points={reducedOffers} city={city} selectedPoint={selectedPoint}/>
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                {reducedOffers.map((card) =>
                  (
                    <PlaceCard
                      key={`card-${card.id}`}
                      offerTitle={card.title}
                      preview={card.previewImage}
                      price={card.price}
                      type={card.type}
                      id={card.id}
                      onMouseEnter={listItemHoverHandler}
                      onTitleClick={listItemClickHandler}
                      isPremium={card.isPremium}
                      isFavorite={card.isFavorite}
                      rating={card.rating}
                    />
                  ),
                )}
              </div>
            </section>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
}

export default Offer;
