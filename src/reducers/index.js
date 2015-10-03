import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import bmiReducer from './bmiReducer';
import chatReducer from './chatReducer';

const reducer = combineReducers({
  router: routerStateReducer,
  bmi: bmiReducer,
  chat: chatReducer
});

export default reducer;