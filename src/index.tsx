import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {createAPI} from './services/api/api';
import { reducer } from './store/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { RequireAuthorization } from './store/action';
import { AuthorizationStatus } from './const';
import { fetchOffersAction, checkAuthAction } from './store/api-actions';
import { ThunkAppDispatch } from './types/action';

const api = createAPI(
  () => store.dispatch(RequireAuthorization(AuthorizationStatus.NoAuth)),
);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ));
//console.log(store.getState());
//store.subscribe(() => console.log(store.getState()));

/* (store.dispatch as ThunkAppDispatch)(checkAuthAction());
(store.dispatch as ThunkAppDispatch)(fetchOffersAction()); */

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
