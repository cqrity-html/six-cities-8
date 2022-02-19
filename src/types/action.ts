import { City, OfferType } from './types';

export enum ActionType {
  CityChange = 'city/cityChange',
  OfferListFill = 'offers/offerListFill'
}

export type CityChangeAction = {
  type: ActionType.CityChange;
  payload: City;
};

export type OfferListFillAction = {
  type: ActionType.OfferListFill;
  payload: OfferType;
};

export type Actions = CityChangeAction | OfferListFillAction;
