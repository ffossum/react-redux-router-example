import * as types from '../constants/ActionTypes';

export function enterChat(username) {
  return {
    type: types.JOIN_CHAT_REQUEST,
    payload: username,
    meta: {
      remote: true
    }
  };
};

export function login(payload) {
  return {
    type: types.JOIN_CHAT_RESPONSE,
    payload: payload
  };
}

export function usernameTaken() {
  return {
    type: types.JOIN_CHAT_RESPONSE,
    error: 'username taken'
  };
}

export function sendMessage(text) {
  return {
    type: types.SEND_MESSAGE,
    payload: text,
    meta: {
      remote: true
    }
  };
}

export function newMessage(payload) {
  return {
    type: types.NEW_MESSAGE,
    payload: payload
  };
}

export function userJoined(name) {
  return {
    type: types.USER_JOINED,
    payload: name
  };
}

export function userLeft(name) {
  return {
    type: types.USER_LEFT,
    payload: name
  };
};