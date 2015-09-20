import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as bmiActions from '../../actions/bmi';

class Bmi extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        const height = this.refs.height.getDOMNode().value.trim();
        const weight = this.refs.weight.getDOMNode().value.trim();

        const { resetBmi } = this.props;
        resetBmi(height, weight);
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
                    <input id="height" type="text" ref="height" defaultValue={this.props.height}
                        placeholder="Height (cm)" />

                    <label htmlFor="weight">Weight (kg)</label>
                    <input id="weight" type="text" ref="weight" defaultValue={this.props.weight}
                        placeholder="Weight (kg)" />

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
