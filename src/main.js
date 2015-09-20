var React = require('react');
var App = require('./jsx/app');
var FrontPage = require('./jsx/frontPage');
var Bmi = require('./jsx/bmi');
var BmiReactive = require('./jsx/bmiReactive');
var Login = require('./jsx/login');
var About = require('./jsx/about');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var history = require('history/lib/createBrowserHistory')();

React.render((
    <Router history={history}>
        <Route path="/" component={App}>
            <IndexRoute component={FrontPage} />
            <Route path="login" component={Login} />
            <Route path="about" component={About} />
            <Route path="bmi" component={Bmi} />
            <Route path="bmi-reactive" component={BmiReactive} />
        </Route>
    </Router>
), document.body);