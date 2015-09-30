import { compose, createStore } from 'redux';
import reducer from '../reducers';
import createHistory from 'history/lib/createBrowserHistory';
import { reduxReactRouter } from 'redux-router';

const initialState = {
  bmi: {
    height: '188',
    weight: '90'
  }
};

let storeEnhancers = [
  reduxReactRouter({
    createHistory
  })
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

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('../reducers', () => {
    const nextReducer = require('../reducers');
    store.replaceReducer(nextReducer);
  });
}

export default store;
