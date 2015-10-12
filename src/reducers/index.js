import {combineReducers} from 'redux';
import {routerStateReducer} from 'redux-router';
import chat from './chatReducer';
import todos from './todosReducer';

const reducer = combineReducers({
  router: routerStateReducer,
  chat,
  todos
});

export default reducer;