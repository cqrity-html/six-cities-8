import { City, OfferType } from './types';

export enum ActionType {
  CityChange = 'city/changeCity',
  SetOffers = 'offers/setOffers',
  LoadOffers = 'data/loadOffers',
}

export type ChangeCityAction = {
  type: ActionType.CityChange;
  payload: City;
};

export type LoadOffersAction = {
  type: ActionType.LoadOffers;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: OfferType[] | any;
};

export type Actions =
| ChangeCityAction
| LoadOffersAction
