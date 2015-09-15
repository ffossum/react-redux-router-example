var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var IndexRoute = ReactRouter.IndexRoute;

var history = require('history/lib/createBrowserHistory')();

var FrontPage = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Welcome</h1>
                <p>Good luck, have fun!</p>
            </div>
        )
    }
});

var About = React.createClass({
    render: function() {
        return (
            <div>
                <h1>About</h1>
                <p>Work in progress</p>
            </div>
        )
    }
});

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

var App = React.createClass({
    render: function() {
        return (
            <div>
                <Menu />
                <div className="container-fluid">
                    {this.props.children}
                </div>
            </div>
        )
    }
});

React.render((
    <Router history={history}>
        <Route path="/" component={App}>
            <IndexRoute component={FrontPage} />
            <Route path="about" component={About} />
        </Route>
    </Router>
), document.body);