var React = require('react');

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Menu = React.createClass({
    render: function() {
        return (
            <nav className="pure-menu pure-menu-horizontal">
                <Link className="pure-menu-heading pure-menu-link" to="/">Front page</Link>
                <ul className="pure-menu-list">
                    <li className="pure-menu-item">
                        <Link className="pure-menu-link" key="about" to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        )
    }
});

module.exports = Menu;