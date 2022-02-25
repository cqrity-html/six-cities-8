import { useState } from 'react';
import PlaceCard from '../place-card/place-card';
import SortPopup from '../sort-popup/sort-popup';
import { OfferType } from '../../types/types';

const sorts = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

type PlacesListProps = {
  offers: OfferType[];
  onMouseEnter: (event: any) => void;
  onTitleClick: (event: any) => void;
  selectedCity: string;
};

function PlacesList({
  offers,
  onMouseEnter,
  onTitleClick,
  selectedCity,
}: PlacesListProps): JSX.Element {
  const [sortedOffers, setSortedOffers] = useState(offers);
  const currentCityOffers = sortedOffers.filter(
    (place) => place.city.name === selectedCity,
  );

  const getSortedOffers = (index: number) => {
    function compareFromMaxPrice(a: OfferType, b: OfferType) {
      if (a.price > b.price) {
        return 1;
      }
      if (a.price < b.price) {
        return -1;
      }
      return 0;
    }
    function compareFromMinPrice(a: OfferType, b: OfferType) {
      if (a.price > b.price) {
        return -1;
      }
      if (a.price < b.price) {
        return 1;
      }
      return 0;
    }
    function compareFromMaxRating(a: OfferType, b: OfferType) {
      if (a.rating > b.rating) {
        return 1;
      }
      if (a.rating < b.rating) {
        return -1;
      }
      return 0;
    }
    const getSortedPlaces = () => {
      if (sorts[index] === 'Price: low to high') {
        return offers.slice().sort(compareFromMaxPrice);
      } else if (sorts[index] === 'Price: high to low') {
        return offers.slice().sort(compareFromMinPrice);
      } else if (sorts[index] === 'Top rated first') {
        return offers.slice().sort(compareFromMaxRating);
      } else {
        return offers;
      }
    };
    const sortedPlaces = getSortedPlaces();
    setSortedOffers(sortedPlaces);
  };

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">
        {currentCityOffers.length} places to stay in {selectedCity}
      </b>
      <SortPopup onSort={getSortedOffers} sorts={sorts} />
      <div className="cities__places-list places__list tabs__content">
        {currentCityOffers.map((card) => (
          <PlaceCard
            key={`card-${card.id}`}
            offerTitle={card.title}
            preview={card.previewImage}
            price={card.price}
            type={card.type}
            onMouseEnter={onMouseEnter}
            onTitleClick={onTitleClick}
            id={card.id}
            isPremium={card.isPremium}
            isFavorite={card.isFavorite}
          />
        ))}
      </div>
    </section>
  );
}

export default PlacesList;
