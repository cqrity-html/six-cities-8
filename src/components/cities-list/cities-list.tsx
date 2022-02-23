import { useState } from 'react';
import CITIES from '../../const';
import { City } from '../../types/types';
import {ChangeCityAction} from '../../types/action';

type CititesListProps = {
  onCityClick: (event: any) => void;
  onCityChange: (index: number) => ChangeCityAction;
};

function CititesList({onCityClick, onCityChange}: CititesListProps): JSX.Element {
  const [activeCity, setActiveCity] = useState(0);

  const onCitySelect = (index: number) => {
    setActiveCity(index);
  };

  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city: City, index: number) => (
        <li onClick={onCityClick} key={city.title} className="locations__item">
          <a
            onClick={() => onCitySelect(index)}
            className={
              activeCity === index
                ? 'locations__item-link tabs__item tabs__item--active'
                : 'locations__item-link tabs__item'
            }
            href="blank"
          >
            <span onClick={() => onCityChange(index)}>{city.title}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default CititesList;
