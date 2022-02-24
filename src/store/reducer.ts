import { ActionType, Actions } from '../types/action';
import { State } from '../types/state';
import placeCards from '../mocks/offers';
import CITIES from '../const';

const initialState = {
  city: CITIES[0],
  offers: placeCards,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return { ...state, city: action.payload };
    case ActionType.FillOffers:
      return { ...state, offers: action.payload };
    default:
      return state;
  }
};

export { reducer };
