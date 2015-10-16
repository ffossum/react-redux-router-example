import React, {Component, PropTypes} from 'react';
import {Button, Glyphicon} from 'react-bootstrap';

class Counter extends Component {
  render() {
    const {increment, decrement, counter} = this.props;
    return (
      <div>
          <p>Clicked: {counter} times</p>

          <Button onClick={increment}><Glyphicon glyph="plus" /></Button>
          {' '}
          <Button onClick={decrement}><Glyphicon glyph="minus" /></Button>
      </div>
    );
  }
}

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
};

export default Counter;
