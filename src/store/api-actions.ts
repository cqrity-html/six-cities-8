//import { adaptToClient } from '../../adapters/adapt-to-client';
import { APIRoutes } from '../const';
import { ThunkActionResult } from '../types/action';
import { RequireAuthorization, RequireLogout/* , setAuthInfo */ } from '../store/action';
//import CityPlaceCard from '../../types/city-place-card';
import { OfferType } from '../types/types';
//import CityPlaceCardApi from '../../types/city-place-card-api';
import { LoadOffers } from '../store/action';
import { dropToken, setToken } from '../services/token/token';
import {AuthorizationStatus} from '../const';
import { AuthData } from '../types/types';
//import TAuthInfo from '../../types/auth-info';
import {Token} from '../services/token/token';

export const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, _, api): Promise<void> => {
    const { data } = await api.get<OfferType[]>(APIRoutes.Offers);
    //const offers = data.map((offer: CityPlaceCardApi) => adaptToClient<CityPlaceCardApi, OfferType>(offer));
    dispatch(LoadOffers(data));
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _, api): Promise<void> => {
    await api.get(APIRoutes.Login)
      .then(() => {
        dispatch(RequireAuthorization(AuthorizationStatus.Auth));
      });
    //const { data } = await api.get(APIRoutes.Login);
    //const authInfo = adaptToClient<AuthInfoApi, AuthInfo>(data);
    //setToken(authInfo.token);
    //dispatch(setAuthInfo(authInfo));
    //dispatch(RequireAuthorization(AuthStatuses.Auth));
  };

export const loginAction = ({login, password}: AuthData): ThunkActionResult =>
  async (dispatch, _, api): Promise<void> => {
    const { data: {token} } = await api.post<{token: Token}>(APIRoutes.Login, {login, password});
    //const authInfo = adaptToClient<TAuthInfoApi, TAuthInfo>(data);
    setToken(token);
    dispatch(RequireAuthorization(AuthorizationStatus.Auth));
    //dispatch(setAuthInfo(authInfo));
  };

export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _, api): Promise<void> => {
    await api.delete(APIRoutes.Logout);
    dropToken();
    dispatch(RequireLogout());
    //dispatch(unfavoriteAllOffers());
  };
