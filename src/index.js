import React from 'react';
import ReactDOM from 'react-dom';
import App from './views';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route } from 'react-router-dom';
import history from './history';
import { Provider } from 'react-redux';
import configureStore from './store';

const store = configureStore();

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
