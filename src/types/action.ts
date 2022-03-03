import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { City, OfferType } from './types';
import {AuthorizationStatus} from '../const';
import { State } from '../types/state';

export enum ActionType {
  CityChange = 'city/changeCity',
  SetOffers = 'offers/setOffers',
  LoadOffers = 'data/loadOffers',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
}

export type ChangeCityAction = {
  type: ActionType.CityChange;
  payload: City;
};

export type FillOffersAction = {
  type: ActionType.SetOffers;
  payload?: OfferType[] | any;
};

export type LoadOffersAction = {
  type: ActionType.LoadOffers;
  payload?: OfferType[] | any;
};

export type RequireAuthorizationAction = {
  type: ActionType.RequireAuthorization;
  authorizationStatus: AuthorizationStatus;
};

export type RequireLogoutAction = {
  type: ActionType.RequireLogout;
};

export type Actions =
| ChangeCityAction
| FillOffersAction
| LoadOffersAction
| RequireAuthorizationAction
| RequireLogoutAction;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;
export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
