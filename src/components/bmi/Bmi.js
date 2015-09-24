import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as bmiActions from '../../actions/bmi';

class Bmi extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    if (this.props) {
      this.state.height = this.props.height;
      this.state.weight = this.props.weight;
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const height = this.refs.height.getDOMNode().value.trim();
    const weight = this.refs.weight.getDOMNode().value.trim();

    const { resetBmi } = this.props;
    resetBmi(height, weight);
  }
  handleChange(ref, e) {
    const newState = {};
    newState[ref] = e.target.value;
    this.setState(newState);
  }
  render() {
    const kg = parseInt(this.props.weight);
    const m = parseInt(this.props.height) / 100;
    const bmi = (kg / (m * m));

    const bmiElement = bmi ? (<div>BMI: {bmi}</div>) : undefined;

    return (
      <form className="pure-form pure-form-stacked">
        <fieldset>
          <label htmlFor="height">Height (cm)</label>
          <input id="height" type="text" ref="height"
            value={this.state.height}
            defaultValue={this.props.height}
            placeholder="Height (cm)"
            onChange={this.handleChange.bind(this, 'height')} />

          <label htmlFor="weight">Weight (kg)</label>
          <input id="weight" type="text" ref="weight"
            value={this.state.weight}
            defaultValue={this.props.weight}
            placeholder="Weight (kg)"
            onChange={this.handleChange.bind(this, 'weight')} />

          <button className="pure-button" onClick={this.handleSubmit}>Submit</button>
        </fieldset>

        {bmiElement}
      </form>
    )
  }
}

export default connect(
  (state) => { return state.bmi; },
  (dispatch) => { return bindActionCreators(bmiActions, dispatch); }
)(Bmi);
