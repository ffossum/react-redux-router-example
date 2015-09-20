var React = require('react');
var App = require('./components/App');
var FrontPage = require('./components/FrontPage');
var Bmi = require('./components/bmi/Bmi');
var BmiReactive = require('./components/bmi/BmiReactive');
var Login = require('./components/Login');
var About = require('./components/About');
var ReactRedux = require('react-redux');
var Provider = ReactRedux.Provider;
var store = require('./store/store');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var history = require('history/lib/createBrowserHistory')();

React.render((
    <Provider store={store}>
        {() => (
            <Router history={history}>
                <Route path="/" component={App}>
                    <IndexRoute component={FrontPage} />
                    <Route path="login" component={Login} />
                    <Route path="about" component={About} />
                    <Route path="bmi" component={Bmi} />
                    <Route path="bmi-reactive" component={BmiReactive} />
                </Route>
            </Router>
        )}
    </Provider>
), document.body);