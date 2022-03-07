import { BaseSyntheticEvent } from 'react';
import {Link} from 'react-router-dom';

type PlaceCardProps = {
  offerTitle: string
  preview: string
  price: number
  type: string
  onMouseEnter?: (event: BaseSyntheticEvent) => void
  onTitleClick?: (event: BaseSyntheticEvent) => void
  id: string
  isPremium: boolean
  isFavorite: boolean
  rating: number
};

function PlaceCard ({offerTitle, preview, price, type, onMouseEnter, onTitleClick, id, isPremium, isFavorite, rating}: PlaceCardProps): JSX.Element {
  const currentPath = `/offer/${id}`;
  return (
    <article id={id} className="cities__place-card place-card" onMouseEnter={onMouseEnter} onClick={onTitleClick}>
      <div className="place-card__mark" style={{display: isPremium ? 'static' : 'none'}}>
        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <img className="place-card__image" src={preview} width="260" height="200" alt="Place"/>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19" style={{fill: isFavorite ? '#4481c3' : 'none'}}>
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link className="header__logo-link header__logo-link--active" to={currentPath}>{offerTitle}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
