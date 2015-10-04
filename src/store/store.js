import { compose, createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';
import createHistory from 'history/lib/createBrowserHistory';
import { reduxReactRouter } from 'redux-router';
import chat from './chatMiddleware';
import * as chatListeners from './chatListeners';
import socket from './socket';

const initialState = {
  bmi: {
    height: '188',
    weight: '90'
  },
  chat: {
    users: {},
    messages: [],
    waitingForResponse: false
  }
};

let storeEnhancers = [
  reduxReactRouter({
    createHistory
  }),
  applyMiddleware(
    chat(socket)
  )
];

if (__DEVELOPMENT__) {
  const { devTools, persistState } = require('redux-devtools');
  storeEnhancers = [...storeEnhancers,
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
  ];
}

const finalCreateStore = compose(...storeEnhancers)(createStore);

const store = finalCreateStore(reducer, initialState);
export default store;

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('../reducers', () => {
    const nextReducer = require('../reducers');
    store.replaceReducer(nextReducer);
  });
}

chatListeners.addAll(store);
