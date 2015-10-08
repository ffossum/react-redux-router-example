import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import bmi from './bmiReducer';
import chat from './chatReducer';
import todos from './todos';

const reducer = combineReducers({
  router: routerStateReducer,
  bmi,
  chat,
  todos
});

export default reducer;