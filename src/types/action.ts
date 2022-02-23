import { City, OfferType } from './types';

export enum ActionType {
  ChangeCity = 'city/changeCity',
  FillOffers = 'offers/fillOffers'
}

export type ChangeCityAction = {
  type: ActionType.ChangeCity;
  payload: City;
};

export type FillOffersAction = {
  type: ActionType.FillOffers;
  payload?: OfferType[] | any;
};

export type Actions = ChangeCityAction | FillOffersAction;
