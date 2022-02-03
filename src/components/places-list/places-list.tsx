import PlaceCard from '../place-card/place-card';
import placeCards from '../../mocks/offers';

function PlacesList () {
  return (
    <div className="cities__places-list places__list tabs__content">
      {placeCards.map((card) =>
        <PlaceCard key={`card-${card.id}`} offerTitle={card.title} preview={card.preview} price={card.price} type={card.type}/>,
      )}
    </div>
  );
}

export default PlacesList;
