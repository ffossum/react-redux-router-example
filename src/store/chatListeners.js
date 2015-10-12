import {login, usernameTaken, newMessage, userJoined, userLeft} from '../actions/chatActions';

const actions = {
  'login': data => login(data),
  'username taken': () => usernameTaken(),
  'new message': data => newMessage(data),
  'user joined': data => userJoined(data.username),
  'user left': data => userLeft(data.username)
};

export function addAll(socket, store) {
  Object.keys(actions).forEach(key => {
    let action = actions[key];
    socket.on(key, data => {
      store.dispatch(action(data));
    });
  });
}