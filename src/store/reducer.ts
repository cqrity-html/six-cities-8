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
      return { ...state, city: CITIES[3]};
    case ActionType.FillOffers:
      return {...state, offers: state.offers};
    default:
      return state;
  }
};

export { reducer };
