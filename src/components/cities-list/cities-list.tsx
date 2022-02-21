import CITIES from '../../const';
import {City} from '../../types/types';

type CititesListProps = {
  onCityClick: (event: any) => void,
  onCityChange: (event: any) => void,
};

function CititesList({onCityClick, onCityChange}: CititesListProps): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city: City) => (
        <li key={city.title} className="locations__item">
          <a
            onClick={onCityClick}
            className="locations__item-link tabs__item"
            href="blank"
          >
            <span onClick={onCityChange}>{city.title}</span>
          </a>
        </li>
      ))}
    </ul>
  /*     <ul className="locations__list tabs__list">
      <li className="locations__item">
        <a
          onClick={onCityClick}
          className="locations__item-link tabs__item tabs__item--active"
          href="blank"
        >
          <span onClick={onCityChange}>Paris</span>
        </a>
      </li>
      <li className="locations__item">
        <a
          onClick={onCityClick}
          className="locations__item-link tabs__item"
          href="blank"
        >
          <span onClick={onCityChange}>Cologne</span>
        </a>
      </li>
      <li className="locations__item">
        <a
          onClick={onCityClick}
          className="locations__item-link tabs__item"
          href="blank"
        >
          <span onClick={onCityChange}>Brussels</span>
        </a>
      </li>
      <li className="locations__item">
        <a
          onClick={onCityClick}
          className="locations__item-link tabs__item"
          href="blank"
        >
          <span onClick={onCityChange}>Amsterdam</span>
        </a>
      </li>
      <li className="locations__item">
        <a
          onClick={onCityClick}
          className="locations__item-link tabs__item"
          href="blank"
        >
          <span onClick={onCityChange}>Hamburg</span>
        </a>
      </li>
      <li className="locations__item">
        <a
          onClick={onCityClick}
          className="locations__item-link tabs__item"
          href="blank"
        >
          <span onClick={onCityChange}>Dusseldorf</span>
        </a>
      </li>
    </ul> */
  );
}

export default CititesList;
