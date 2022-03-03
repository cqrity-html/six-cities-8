import axios, {AxiosInstance, AxiosResponse, AxiosError,  AxiosRequestConfig} from 'axios';
import { getToken } from '../token/token';

const BASE_URL = 'https://9.react.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;

enum HttpCodes {
  Unauthorized = 401,
}

type UnaathorizedCallback = () => void;

export const createAPI = (onUnauthorized: UnaathorizedCallback): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });
  api.interceptors.response.use(
    (response: AxiosResponse) => response,

    (error: AxiosError) => {
      const { response } = error;

      if (response?.status === HttpCodes.Unauthorized) {
        return onUnauthorized();
      }
      return Promise.reject(error);
    });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      //const newConfig = {...config};
      if (token) {
        config.headers['x-token'] = token;
      }
      return config;
    });
  return api;
};
