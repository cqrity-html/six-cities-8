import { City, OfferType } from '../types/types';

export type State = {
  city: City,
  offers: OfferType[],
  isDataLoaded: boolean,
};
