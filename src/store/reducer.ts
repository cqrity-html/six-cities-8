import { ActionType, Actions } from '../types/action';
import { State } from '../types/state';
import placeCards from '../mocks/offers';
import CITY from '../mocks/city';

const initialState = {
  city: CITY,
  offers: placeCards,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.CityChange:
      return { ...state, city: state.city };
    case ActionType.OfferListFill:
      return { ...state, offers: state.offers };
    default:
      return state;
  }
};

export { reducer };
