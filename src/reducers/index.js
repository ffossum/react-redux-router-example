import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import bmiReducer from './bmiReducer';

const reducer = combineReducers({
  router: routerStateReducer,
  bmi: bmiReducer
});

export default reducer;