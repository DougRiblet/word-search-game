import { render } from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise';
import App from './components/App';
import reducer from './reducers/root-reducer';
import initialState from './initial/initial-state';

const store = createStore(reducer, initialState, applyMiddleware(logger, promise));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
