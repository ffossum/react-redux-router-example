import {expect} from 'chai';
import reducer from '../../src/reducers/chatReducer';
import * as actions from '../../src/actions/chatActions';

describe('chat reducer', () => {
  it('handles join chat request correctly', () => {
    const previousState = {
      users: {},
      messages: []
    };

    const action = actions.enterChat('Jack');
    const state = reducer(previousState, action);

    expect(state).to.deep.equal({
      users: {},
      messages: [],
      username: 'Jack',
      waitingForResponse: true
    });
  });

  it('handles join chat successful response correctly', () => {
    const previousState = {
      users: {},
      messages: [],
      username: 'Jack',
      waitingForResponse: true
    };

    const action = actions.login({
      users: {'Jack': 'Jack'}
    });
    const state = reducer(previousState, action);

    expect(state).to.deep.equal({
      users: {'Jack': 'Jack'},
      messages: [],
      username: 'Jack',
      waitingForResponse: false
    });
  });
});