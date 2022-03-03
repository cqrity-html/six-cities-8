import { City, OfferType } from '../types/types';
import {AuthorizationStatus} from '../const';

export type State = {
  city: City,
  offers: OfferType[],
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
};
