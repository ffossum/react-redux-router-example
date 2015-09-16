var React = require('react');

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Menu = React.createClass({
    render: function() {
        return (
            <nav className="navbar">
                <Link className="navbar-brand" to="/">Front page</Link>
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" key="about" to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        )
    }
});

module.exports = Menu;