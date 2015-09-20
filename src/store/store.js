import { createStore } from 'redux';
import Immutable from 'immutable';

const initialState = {
    bmi: {}
};

function bmi(state = initialState, action = '') {
    state = Immutable.fromJS(state);

    switch (action.type) {
        case 'bmi-reset':
            return state.set('bmi', action.value).toJS();
        case 'bmi-weight':
            return state.setIn(['bmi', 'weight'], action.value).toJS();
        case 'bmi-height':
            return state.setIn(['bmi', 'height'], action.value).toJS();
    }

    return state.toJS();
}

export default createStore(bmi);