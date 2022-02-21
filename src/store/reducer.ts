import { ActionType, Actions } from '../types/action';
import { State } from '../types/state';
import placeCards from '../mocks/offers';
import AMSTERDAM from '../mocks/cities';

const initialState = {
  city: AMSTERDAM,
  offers: placeCards,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return { ...state, city: state.city };
    case ActionType.FillOffers:
      return { ...state, offers: state.offers };
    default:
      return state;
  }
};

export { reducer };
