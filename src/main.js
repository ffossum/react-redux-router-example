import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import FrontPage from './components/FrontPage';
import Bmi from './components/bmi/Bmi';
import BmiReactive from './components/bmi/BmiReactive';
import Login from './components/Login';
import About from './components/About';
import { Provider } from 'react-redux';
import { Route, IndexRoute } from 'react-router';
import { ReduxRouter } from 'redux-router';

import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import store from './store/store';

import './stylesheets/main.scss';

ReactDOM.render((
  <div>
    <Provider store={store}>
      <ReduxRouter>
        <Route path="/" component={App}>
          <IndexRoute component={FrontPage} />
          <Route path="login" component={Login} />
          <Route path="about" component={About} />
          <Route path="bmi" component={Bmi} />
          <Route path="bmi-reactive" component={BmiReactive} />
        </Route>
      </ReduxRouter>
    </Provider>
    <DebugPanel top right bottom>
      <DevTools store={store} monitor={LogMonitor} />
    </DebugPanel>
  </div>
), document.getElementById('root'));
