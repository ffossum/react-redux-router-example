import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import chat from './chatReducer';
import todos from './todos';

const reducer = combineReducers({
  router: routerStateReducer,
  chat,
  todos
});

export default reducer;