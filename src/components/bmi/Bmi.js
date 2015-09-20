let React = require('react');
let connect = require('react-redux').connect;
let bindActionCreators = require('redux').bindActionCreators;
let bmiActions = require('./../../actions/bmi');

let Bmi = React.createClass({
    handleSubmit(e) {
        e.preventDefault();
        const height = this.refs.height.getDOMNode().value.trim();
        const weight = this.refs.weight.getDOMNode().value.trim();

        const { resetBmi } = this.props;
        resetBmi(height, weight);
    },

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
});

module.exports = connect(
    (state) => { return state.bmi; },
    (dispatch) => { return bindActionCreators(bmiActions, dispatch); }
)(Bmi);
