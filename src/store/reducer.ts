import { ActionType, Actions } from '../types/action';
import { State } from '../types/state';
import CITIES from '../const';
import placeCards from '../mocks/offers';

const initialState = {
  city: CITIES[0],
  offers: placeCards,
  isDataLoaded: true,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.CityChange:
      return { ...state, city: action.payload };
    case ActionType.LoadOffers:
      return { ...state, offers: action.payload };
    default:
      return state;
  }
};

export { reducer };
