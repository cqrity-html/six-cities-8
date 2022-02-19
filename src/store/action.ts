import {
  ActionType,
  CityChangeAction,
  OfferListFillAction
} from '../types/action';
import { City, OfferType } from '../types/types';

export const CityChange = (city: City): CityChangeAction => ({
  type: ActionType.CityChange,
  payload: city,
});

export const OfferListFill = (offers: OfferType): OfferListFillAction => ({
  type: ActionType.OfferListFill,
  payload: offers,
});
