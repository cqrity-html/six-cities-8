import { ActionType, Actions } from '../types/action';
import { State } from '../types/state';
import CITIES, {AuthorizationStatus} from '../const';
//import placeCards from '../mocks/offers';

const initialState = {
  city: CITIES[0],
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.CityChange:
      return { ...state, city: action.payload };
    case ActionType.SetOffers:
      return { ...state, offers: action.payload };
    case ActionType.LoadOffers:
      return { ...state, offers: action.payload };
    case ActionType.RequireAuthorization:
      return { ...state, authorizationStatus: action.authorizationStatus };
    case ActionType.RequireLogout:
      return { ...state, authorizationStatus: AuthorizationStatus.NoAuth,
      };
    default:
      return state;
  }
};

export { reducer };
