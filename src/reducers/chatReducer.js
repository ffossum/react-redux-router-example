import Immutable from 'immutable';

function chat(state = {}, action) {
  const immutableState = Immutable.fromJS(state);

  switch (action.type) {
    case 'JOIN_CHAT_REQUEST': {
      let newState = immutableState.setIn(['username'], action.payload);
      return newState.setIn(['waitingForResponse'], true).toJS();
    }
    case 'JOIN_CHAT_RESPONSE': {
      let newState = immutableState.setIn(['users'], action.payload.users);
      return newState.setIn(['waitingForResponse'], false).toJS();
    }
    case 'SEND_MESSAGE': {
      return immutableState.updateIn(['messages'], messages => {
        return messages.push({
          user: state.username,
          text: action.payload
        });
      }).toJS();
    }
    case 'NEW_MESSAGE': {
      return immutableState.updateIn(['messages'], messages => {
        return messages.push(action.payload);
      }).toJS();
    }
    case 'USER_JOINED': {
      const name = action.payload;
      return immutableState.updateIn(['users'], users => {
        return users.set(name, name);
      }).updateIn(['messages'], messages => {
        return messages.push({
          text: `${name} has joined.`
        });
      }).toJS();
    }
    case 'USER_LEFT': {
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