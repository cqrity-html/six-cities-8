import {
  ActionType,
  ChangeCityAction,
  FillOffersAction
} from '../types/action';
import { OfferType } from '../types/types';
import CITIES, {AuthorizationStatus} from '../const';

export const CityChange = (index: number): ChangeCityAction => ({
  type: ActionType.CityChange,
  payload: CITIES[index],
});

export const SetOffers = (offers: OfferType[]): FillOffersAction => ({
  type: ActionType.SetOffers,
  payload: offers,
});

export const LoadOffers = (offers: OfferType[]) => ({
  type: ActionType.LoadOffers,
  payload: {
    offers,
  },
} as const);

export const RequireAuthorization = (authorizationStatus: AuthorizationStatus) => ({
  type: ActionType.LoadOffers,
  authorizationStatus,
} as const);

export const RequireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);
