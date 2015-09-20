var React = require('react');
var Menu = require('./menu.jsx');

var App = React.createClass({
    render: function() {
        return (
            <div>
                <Menu />
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        )
    }
});

module.exports = App;
