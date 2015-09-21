import { createStore } from 'redux';
import reducer from '../reducers';

const initialState = {
    bmi: {}
};

const store = createStore(reducer, initialState);

if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
        const nextReducer = require('../reducers');
        store.replaceReducer(nextReducer);
    });
}

export default store;