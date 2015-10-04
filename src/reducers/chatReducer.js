import Immutable from 'immutable';
import * as actions from '../actions/chatActions';

function chat(state = {}, action) {
  const immutableState = Immutable.fromJS(state);

  switch (action.type) {
    case actions.JOIN_CHAT_REQUEST: {
      return immutableState
        .setIn(['username'], action.payload)
        .setIn(['waitingForResponse'], true)
        .toJS();
    }
    case actions.JOIN_CHAT_RESPONSE: {
      return immutableState
        .setIn(['users'], action.payload.users)
        .setIn(['waitingForResponse'], false)
        .toJS();
    }
    case actions.SEND_MESSAGE: {
      return immutableState.updateIn(['messages'], messages => {
        return messages.push({
          user: state.username,
          text: action.payload
        });
      }).toJS();
    }
    case actions.NEW_MESSAGE: {
      return immutableState.updateIn(['messages'], messages => {
        return messages.push(action.payload);
      }).toJS();
    }
    case actions.USER_JOINED: {
      const name = action.payload;
      return immutableState.updateIn(['users'], users => {
        return users.set(name, name);
      }).updateIn(['messages'], messages => {
        return messages.push({
          text: `${name} has joined.`
        });
      }).toJS();
    }
    case actions.USER_LEFT: {
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