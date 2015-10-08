import Immutable from 'immutable';
import * as types from '../constants/ActionTypes';

function chat(state = {}, action) {
  const immutableState = Immutable.fromJS(state);

  switch (action.type) {
    case types.JOIN_CHAT_REQUEST: {
      return immutableState
        .setIn(['username'], action.payload)
        .setIn(['waitingForResponse'], true)
        .toJS();
    }
    case types.JOIN_CHAT_RESPONSE: {
      return immutableState
        .setIn(['users'], action.payload.users)
        .setIn(['waitingForResponse'], false)
        .toJS();
    }
    case types.SEND_MESSAGE: {
      return immutableState.updateIn(['messages'], messages => {
        return messages.push({
          user: state.username,
          text: action.payload
        });
      }).toJS();
    }
    case types.NEW_MESSAGE: {
      return immutableState.updateIn(['messages'], messages => {
        return messages.push(action.payload);
      }).toJS();
    }
    case types.USER_JOINED: {
      const name = action.payload;
      return immutableState.updateIn(['users'], users => {
        return users.set(name, name);
      }).updateIn(['messages'], messages => {
        return messages.push({
          text: `${name} has joined.`
        });
      }).toJS();
    }
    case types.USER_LEFT: {
      const name = action.payload;
      return immutableState.updateIn(['users'], users => {
        return users.delete(name);
      }).updateIn(['messages'], messages => {
        return messages.push({
          text: `${name} has left.`
        });
      }).toJS();
    }
  }

  return state;
}

export default chat;