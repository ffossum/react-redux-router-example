import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Header from './Header';
import MainSection from './MainSection';
import * as TodoActions from '../../actions/todosActions';

import '../../stylesheets/todos.scss';

class App extends Component {
  render() {
    const {todos, dispatch} = this.props;
    const actions = bindActionCreators(TodoActions, dispatch);

    return (
      <div className="todomvc-container">
        <div className="todoapp">
          <Header addTodo={actions.addTodo} />
          <MainSection todos={todos} actions={actions} />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

export default connect(mapStateToProps)(App);
