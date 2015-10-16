import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Counter from './Counter';
import * as CounterActions from '../../actions/counterActions';

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
