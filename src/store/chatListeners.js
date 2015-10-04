import socket from './socket';
import { login, newMessage, userJoined, userLeft } from '../actions/chatActions';

export function addAll(store) {
  socket.on('login', data => {
    store.dispatch(login(data));
  });

  socket.on('new message', data => {
    store.dispatch(newMessage(data));
  });

  socket.on('user joined', data => {
    store.dispatch(userJoined(data.username));
  });

  socket.on('user left', data => {
    store.dispatch(userLeft(data.username));
  });
}
