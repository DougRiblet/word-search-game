import { render } from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import App from './components/App';
import reducer from './reducers/root-reducer';
import initialState from './initial/initial-state';

const store = createStore(reducer, initialState, applyMiddleware(logger, thunk));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
