let React = require('react');
let connect = require('react-redux').connect;
let bindActionCreators = require('redux').bindActionCreators;
let bmiActions = require('./../../actions/bmi');

let Bmi = React.createClass({
    handleChange(ref) {
        const value = React.findDOMNode(this.refs[ref]).value.trim();
        const { setBmiProperty } = this.props;

        setBmiProperty(ref, value);
    },
    render() {
        const kg = parseInt(this.props.weight);
        const m = parseInt(this.props.height) / 100;
        const bmi = (kg / (m * m)) || '';

        const bmiElement = bmi ? <div>BMI: {bmi}</div> : undefined;

        return (
            <form className="pure-form pure-form-stacked">
                <fieldset>
                    <label htmlFor="height">Height (cm)</label>
                    <input id="height" type="text" ref="height" value={this.props.height}
                           placeholder="Height (cm)" onChange={this.handleChange.bind(this, 'height')} />

                    <label htmlFor="weight">Weight (kg)</label>
                    <input id="weight" type="text" ref="weight" value={this.props.weight}
                           placeholder="Weight (kg)" onChange={this.handleChange.bind(this, 'weight')} />
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