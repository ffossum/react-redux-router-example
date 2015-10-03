import { compose, createStore, applyMiddleware } from 'redux';
import io from 'socket.io-client';
import reducer from '../reducers';
import createHistory from 'history/lib/createBrowserHistory';
import { reduxReactRouter } from 'redux-router';
import chat from './chatMiddleware';
import { login, newMessage, userJoined, userLeft } from '../actions/chatActions';

const socket = io(`${location.protocol}//${location.hostname}:8080`);

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

socket.on('login', data => {
  store.dispatch(login(data));
});

socket.on('new message', data => {
  store.dispatch(newMessage(data));
});

socket.on('user joined', data => {
  store.dispatch(userJoined(data.username));
});

socket.on('user left', data => {
  store.dispatch(userLeft(data.username));
});
