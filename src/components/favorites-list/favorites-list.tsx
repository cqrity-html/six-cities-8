import FavoritesCard from '../favorites-card/favorites-card';
import {OfferType} from '../../types/types';

type FavoritesListProps = {
  places: OfferType[]
};

function FavoritesList ({places}: FavoritesListProps): JSX.Element {
  return (
    <div className="favorites__places">
      {places.map((card) =>
        (
          <FavoritesCard
            key={`card-${card.id}`}
            offerTitle={card.title}
            preview={card.previewImage}
            price={card.price}
            type={card.type}
          />
        ),
      )}
    </div>
  );
}

export default FavoritesList;
