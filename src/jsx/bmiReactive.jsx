let React = require('react');

let Bmi = React.createClass({
    getInitialState() {
        return {height: '', weight: ''};
    },
    handleChange(ref) {
        let value = React.findDOMNode(this.refs[ref]).value.trim();

        let state = {};
        state[ref] = value;

        this.setState(state);
    },
    render() {
        let kg = parseInt(this.state.weight);
        let m = parseInt(this.state.height) / 100;
        let bmi = (kg / (m * m)) || '';

        let bmiElement = bmi ? <div>BMI: {bmi}</div> : undefined;

        return (
            <form className="pure-form pure-form-stacked">
                <fieldset>
                    <label htmlFor="height">Height (cm)</label>
                    <input id="height" type="text" ref="height" value={this.state.height}
                           placeholder="Height (cm)" onChange={this.handleChange.bind(this, 'height')} />

                    <label htmlFor="weight">Weight (kg)</label>
                    <input id="weight" type="text" ref="weight" value={this.state.weight}
                           placeholder="Weight (kg)" onChange={this.handleChange.bind(this, 'weight')} />
                </fieldset>
                {bmiElement}
            </form>
        )
    }
});

module.exports = Bmi;