export function enterChat(username) {
  return {
    type: 'JOIN_CHAT_REQUEST',
    payload: username,
    meta: {
      remote: true
    }
  };
};

export function login(payload) {
  return {
    type: 'JOIN_CHAT_RESPONSE',
    payload: payload
  };
}

export function sendMessage(text) {
  return {
    type: 'SEND_MESSAGE',
    payload: text,
    meta: {
      remote: true
    }
  };
}

export function newMessage(payload) {
  return {
    type: 'NEW_MESSAGE',
    payload: payload
  };
}

export function userJoined(name) {
  return {
    type: 'USER_JOINED',
    payload: name
  };
}

export function userLeft(name) {
  return {
    type: 'USER_LEFT',
    payload: name
  };
};