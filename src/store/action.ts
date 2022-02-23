import {
  ActionType,
  ChangeCityAction,
  FillOffersAction
} from '../types/action';
import { OfferType } from '../types/types';
import CITIES from '../const';

export const CityChange = (index: number): ChangeCityAction => ({
  type: ActionType.ChangeCity,
  payload: CITIES[index],
});

export const SetOffers = (offers: OfferType[]): FillOffersAction => ({
  type: ActionType.FillOffers,
  payload: offers,
});
