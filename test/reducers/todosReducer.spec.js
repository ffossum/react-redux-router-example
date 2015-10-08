import {expect} from 'chai';
import todos from '../../src/reducers/todosReducer';
import * as types from '../../src/constants/ActionTypes';

describe('todos reducer', () => {
  it('should handle initial state', () => {
    expect(
      todos(undefined, {})
    ).to.deep.equal([{
      text: 'Use Redux',
      completed: false,
      id: 0
    }]);
  });

  it('should handle ADD_TODO', () => {
    expect(
      todos([], {
        type: types.ADD_TODO,
        text: 'Run the tests'
      })
    ).to.deep.equal([{
      text: 'Run the tests',
      completed: false,
      id: 0
    }]);

    expect(
      todos([{
        text: 'Use Redux',
        completed: false,
        id: 0
      }], {
        type: types.ADD_TODO,
        text: 'Run the tests'
      })
    ).to.deep.equal([{
      text: 'Run the tests',
      completed: false,
      id: 1
    }, {
      text: 'Use Redux',
      completed: false,
      id: 0
    }]);

    expect(
      todos([{
        text: 'Run the tests',
        completed: false,
        id: 1
      }, {
        text: 'Use Redux',
        completed: false,
        id: 0
      }], {
        type: types.ADD_TODO,
        text: 'Fix the tests'
      })
    ).to.deep.equal([{
      text: 'Fix the tests',
      completed: false,
      id: 2
    }, {
      text: 'Run the tests',
      completed: false,
      id: 1
    }, {
      text: 'Use Redux',
      completed: false,
      id: 0
    }]);
  });

  it('should handle DELETE_TODO', () => {
    expect(
      todos([{
        text: 'Run the tests',
        completed: false,
        id: 1
      }, {
        text: 'Use Redux',
        completed: false,
        id: 0
      }], {
        type: types.DELETE_TODO,
        id: 1
      })
    ).to.deep.equal([{
      text: 'Use Redux',
      completed: false,
      id: 0
    }]);
  });

  it('should handle EDIT_TODO', () => {
    expect(
      todos([{
        text: 'Run the tests',
        completed: false,
        id: 1
      }, {
        text: 'Use Redux',
        completed: false,
        id: 0
      }], {
        type: types.EDIT_TODO,
        text: 'Fix the tests',
        id: 1
      })
    ).to.deep.equal([{
      text: 'Fix the tests',
      completed: false,
      id: 1
    }, {
      text: 'Use Redux',
      completed: false,
      id: 0
    }]);
  });

  it('should handle COMPLETE_TODO', () => {
    expect(
      todos([{
        text: 'Run the tests',
        completed: false,
        id: 1
      }, {
        text: 'Use Redux',
        completed: false,
        id: 0
      }], {
        type: types.COMPLETE_TODO,
        id: 1
      })
    ).to.deep.equal([{
      text: 'Run the tests',
      completed: true,
      id: 1
    }, {
      text: 'Use Redux',
      completed: false,
      id: 0
    }]);
  });

  it('should handle COMPLETE_ALL', () => {
    expect(
      todos([{
        text: 'Run the tests',
        completed: true,
        id: 1
      }, {
        text: 'Use Redux',
        completed: false,
        id: 0
      }], {
        type: types.COMPLETE_ALL
      })
    ).to.deep.equal([{
      text: 'Run the tests',
      completed: true,
      id: 1
    }, {
      text: 'Use Redux',
      completed: true,
      id: 0
    }]);

    // Unmark if all todos are currently completed
    expect(
      todos([{
        text: 'Run the tests',
        completed: true,
        id: 1
      }, {
        text: 'Use Redux',
        completed: true,
        id: 0
      }], {
        type: types.COMPLETE_ALL
      })
    ).to.deep.equal([{
      text: 'Run the tests',
      completed: false,
      id: 1
    }, {
      text: 'Use Redux',
      completed: false,
      id: 0
    }]);
  });

  it('should handle CLEAR_COMPLETED', () => {
    expect(
      todos([{
        text: 'Run the tests',
        completed: true,
        id: 1
      }, {
        text: 'Use Redux',
        completed: false,
        id: 0
      }], {
        type: types.CLEAR_COMPLETED
      })
    ).to.deep.equal([{
      text: 'Use Redux',
      completed: false,
      id: 0
    }]);
  });

  it('should not generate duplicate ids after CLEAR_COMPLETED', () => {
    expect(
      [{
        type: types.COMPLETE_TODO,
        id: 0
      }, {
        type: types.CLEAR_COMPLETED
      }, {
        type: types.ADD_TODO,
        text: 'Write more tests'
      }].reduce(todos, [{
        id: 0,
        completed: false,
        text: 'Use Redux'
      }, {
        id: 1,
        completed: false,
        text: 'Write tests'
      }])
    ).to.deep.equal([{
      text: 'Write more tests',
      completed: false,
      id: 2
    }, {
      text: 'Write tests',
      completed: false,
      id: 1
    }]);
  });
});
