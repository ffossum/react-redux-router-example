let React = require('react');

let Bmi = React.createClass({
    getInitialState() {
        return {height: '', weight: ''};
    },
    handleSubmit(e) {
        e.preventDefault();
        let height = this.refs.height.getDOMNode().value.trim();
        let weight = this.refs.weight.getDOMNode().value.trim();

        this.setState({height: height, weight: weight});
    },

    render() {
        let kg = parseInt(this.state.weight);
        let m = parseInt(this.state.height) / 100;
        let bmi = (kg / (m * m));

        let bmiElement = bmi ? (<div>BMI: {bmi}</div>) : undefined;

        return (
            <form className="pure-form pure-form-stacked">
                <fieldset>
                    <label htmlFor="height">Height (cm)</label>
                    <input id="height" type="text" ref="height" defaultValue={this.state.height}
                        placeholder="Height (cm)" />

                    <label htmlFor="weight">Weight (kg)</label>
                    <input id="weight" type="text" ref="weight" defaultValue={this.state.weight}
                        placeholder="Weight (kg)" />

                    <button className="pure-button" onClick={this.handleSubmit}>Submit</button>
                </fieldset>

                {bmiElement}
            </form>
        )
    }
});

module.exports = Bmi;