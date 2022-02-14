import PlaceCard from '../place-card/place-card';

type PlacesListProps = {
  onListItemHover: (listItemName: string) => void
  onListTitleClick: (listItemId: string) => void
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
            preview={card.preview}
            price={card.price}
            type={card.type}
            onMouseEnter={listItemHoverHandler}
            onTitleClick={listItemClickHandler}
            id={card.id}
          />
        ),
      )}
    </div>
  );
}

export default PlacesList;
