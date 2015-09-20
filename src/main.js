import React from 'react';
import App from './components/App';
import FrontPage from './components/FrontPage';
import Bmi from './components/bmi/Bmi';
import BmiReactive from './components/bmi/BmiReactive';
import Login from './components/Login';
import About from './components/About';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';

import store from './store/store';
import createBrowserHistory from 'history/lib/createBrowserHistory';

const history = createBrowserHistory();

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