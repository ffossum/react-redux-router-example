import { JOIN_CHAT_REQUEST, SEND_MESSAGE } from '../actions/chatActions';

export default socket => store => next => action => {
  if (action.meta && action.meta.remote) {
    switch (action.type) {
      case JOIN_CHAT_REQUEST: {
        socket.emit('add user', action.payload);
        break;
      }
      case SEND_MESSAGE: {
        socket.emit('new message', action.payload);
        break;
      }
    }
  }
  return next(action);
};