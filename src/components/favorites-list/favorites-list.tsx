import FavoritesCard from '../favorites-card/favorites-card';

type FavoritesListProps = {
  places: {
    title: string;
    preview: string;
    price: number;
    type: string;
    id: string;
    lat: number;
    lng: number;
    reviews: string[];
}[]
};

function FavoritesList ({places}: FavoritesListProps): JSX.Element {
  return (
    <div className="favorites__places">
      {places.map((card) =>
        (
          <FavoritesCard
            key={`card-${card.id}`}
            offerTitle={card.title}
            preview={card.preview}
            price={card.price}
            type={card.type}
          />
        ),
      )}
    </div>
  );
}

export default FavoritesList;
