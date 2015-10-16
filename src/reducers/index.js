import {combineReducers} from 'redux';
import {routerStateReducer} from 'redux-router';
import chat from './chatReducer';
import counter from './counterReducer';
import todos from './todosReducer';

const reducer = combineReducers({
  router: routerStateReducer,
  chat,
  counter,
  todos
});

export default reducer;