import Immutable from 'immutable';

function bmi(state = {}, action) {
  const immutableState = Immutable.fromJS(state);

  switch (action.type) {
    case 'bmi-reset':
      return action.payload;
    case 'bmi-weight':
      return immutableState.setIn(['weight'], action.payload).toJS();
    case 'bmi-height':
      return immutableState.setIn(['height'], action.payload).toJS();
  }

  return state;
}

export default bmi;
