import PlaceCard from '../place-card/place-card';
import {OfferType} from '../../types/types';

type PlacesListProps = {
  onListItemHover: (listItemId: string) => void
  onListTitleClick: (listItemId: string) => void
  places: OfferType[]
};

function PlacesList ({places, onListItemHover, onListTitleClick}: PlacesListProps):JSX.Element {
  const listItemHoverHandler = (event: any) => {
    event.preventDefault();
    onListItemHover(event.currentTarget.id);
  };

  const listItemClickHandler = (event: any) => {
    event.preventDefault();
    onListTitleClick(event.currentTarget.id);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {places.map((card) =>
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
  );
}

export default PlacesList;
