import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import FrontPage from './components/FrontPage';
import Chat from './components/Chat';
import Todos from './components/todos/App';
import Bmi from './components/bmi/Bmi';
import BmiReactive from './components/bmi/BmiReactive';
import About from './components/About';
import { Provider } from 'react-redux';
import { Route, IndexRoute } from 'react-router';
import { ReduxRouter } from 'redux-router';
import store from './store/store';

import './stylesheets/main.scss';

ReactDOM.render((
  <div>
    <Provider store={store}>
      <ReduxRouter>
        <Route path="/" component={App}>
          <IndexRoute component={FrontPage} />
          <Route path="chat" component={Chat} />
          <Route path="todos" component={Todos} />
          <Route path="about" component={About} />
          <Route path="bmi" component={Bmi} />
          <Route path="bmi-reactive" component={BmiReactive} />
        </Route>
      </ReduxRouter>
    </Provider>
    {
      () => {
        if (__DEVELOPMENT__) {
          const { DevTools, DebugPanel, LogMonitor } = require('redux-devtools/lib/react');
          return (
            <DebugPanel top right bottom>
              <DevTools store={store} monitor={LogMonitor} />
            </DebugPanel>
          );
        }
      }()
    }
  </div>
), document.getElementById('root'));
