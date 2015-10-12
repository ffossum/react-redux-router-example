import {compose, createStore, applyMiddleware} from 'redux';
import reducer from '../reducers';
import createHistory from 'history/lib/createBrowserHistory';
import {reduxReactRouter} from 'redux-router';
import chat from './chatMiddleware';
import * as chatListeners from './chatListeners';
import socket from './socket';

let storeEnhancers = [
  reduxReactRouter({
    createHistory
  }),
  applyMiddleware(
    chat(socket)
  )
];

if (__DEVELOPMENT__) {
  const {devTools, persistState} = require('redux-devtools');
  storeEnhancers = [...storeEnhancers,
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
  ];
}

const finalCreateStore = compose(...storeEnhancers)(createStore);

const store = finalCreateStore(reducer);
export default store;

chatListeners.addAll(socket, store);

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('../reducers', () => {
    const nextReducer = require('../reducers');
    store.replaceReducer(nextReducer);
  });

  module.hot.accept('./chatListeners', () => {
    socket.off();
    const newChatListeners = require('./chatListeners');
    newChatListeners.addAll(socket, store);
  });
}
