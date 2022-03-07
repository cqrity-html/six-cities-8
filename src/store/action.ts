import {
  ActionType,
  ChangeCityAction
} from '../types/action';
import { OfferType } from '../types/types';
import CITIES from '../const';

export const CityChange = (index: number): ChangeCityAction => ({
  type: ActionType.CityChange,
  payload: CITIES[index],
});

export const LoadOffers = (offers: OfferType[]) => ({
  type: ActionType.LoadOffers,
  payload: {
    offers,
  },
} as const);
