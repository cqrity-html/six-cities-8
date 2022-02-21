import {
  ActionType,
  ChangeCityAction,
  FillOffersAction
} from '../types/action';
import { City, OfferType } from '../types/types';

export const CityChange = (city: City): ChangeCityAction => ({
  type: ActionType.ChangeCity,
  payload: city,
});

export const OfferListFill = (offers: OfferType): FillOffersAction => ({
  type: ActionType.FillOffers,
  payload: offers,
});
