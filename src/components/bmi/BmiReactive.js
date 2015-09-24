import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as bmiActions from '../../actions/bmi';

class Bmi extends React.Component {
  handleChange(ref, e) {
    const value = e.target.value.trim();
    const { setBmiProperty } = this.props;

    setBmiProperty(ref, value);
  }
  render() {
    const kg = parseInt(this.props.weight);
    const m = parseInt(this.props.height) / 100;
    const bmi = (kg / (m * m));

    const bmiElement = bmi ? <div>BMI: {bmi}</div> : undefined;

    return (
      <form className="pure-form pure-form-stacked">
        <fieldset>
          <label htmlFor="height">Height (cm)</label>
          <input id="height" type="text" ref="height"
            value={this.props.height}
            placeholder="Height (cm)"
            onChange={this.handleChange.bind(this, 'height')} />

          <label htmlFor="weight">Weight (kg)</label>
          <input id="weight" type="text" ref="weight"
            value={this.props.weight}
            placeholder="Weight (kg)"
            onChange={this.handleChange.bind(this, 'weight')} />
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
