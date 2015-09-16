var React = require('react');
var App = require('./jsx/app.jsx');
var FrontPage = require('./jsx/frontPage.jsx');
var About = require('./jsx/about.jsx');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var history = require('history/lib/createBrowserHistory')();

React.render((
    <Router history={history}>
        <Route path="/" component={App}>
            <IndexRoute component={FrontPage} />
            <Route path="about" component={About} />
        </Route>
    </Router>
), document.body);