import {expect} from 'chai';
import reducer from '../../src/reducers/chatReducer';
import * as actions from '../../src/actions/chatActions';

describe('chat reducer', () => {
  it('handles join chat request correctly', () => {

    const previousState = {
      loggedIn: false,
      users: {},
      messages: [],
      waitingForResponse: false,
      errors: []
    };

    const action = actions.enterChat('Jack');
    const state = reducer(previousState, action);

    expect(state).to.deep.equal({
      loggedIn: false,
      users: {},
      messages: [],
      waitingForResponse: true,
      errors: [],
      username: 'Jack'
    });
  });

  it('handles join chat successful response correctly', () => {
    const previousState = {
      loggedIn: false,
      users: {},
      messages: [],
      waitingForResponse: true,
      errors: [],
      username: 'Jack'
    };

    const action = actions.login({
      users: {'Jack': 'Jack'}
    });
    const state = reducer(previousState, action);

    expect(state).to.deep.equal({
      loggedIn: true,
      users: {'Jack': 'Jack'},
      messages: [],
      waitingForResponse: false,
      errors: [],
      username: 'Jack'
    });
  });
});