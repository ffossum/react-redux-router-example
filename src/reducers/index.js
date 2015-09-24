import Immutable from 'immutable';

function bmi(state, action) {
  state = Immutable.fromJS(state);

  switch (action.type) {
    case 'bmi-reset':
      return state.set('bmi', action.payload).toJS();
    case 'bmi-weight':
      return state.setIn(['bmi', 'weight'], action.payload).toJS();
    case 'bmi-height':
      return state.setIn(['bmi', 'height'], action.payload).toJS();
  }

  return state.toJS();
}

export default bmi;
