import { compose, createStore } from 'redux';
import reducer from '../reducers';
import { devTools, persistState } from 'redux-devtools';
import createHistory from 'history/lib/createBrowserHistory';
import { reduxReactRouter } from 'redux-router';

const initialState = {
  bmi: {
    height: '188',
    weight: '90'
  }
};

const finalCreateStore = compose(
  reduxReactRouter({
    createHistory
  }),
  devTools(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

const store = finalCreateStore(reducer, initialState);

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('../reducers', () => {
    const nextReducer = require('../reducers');
    store.replaceReducer(nextReducer);
  });
}

export default store;
