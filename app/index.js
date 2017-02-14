import 'babel-polyfill';
import 'rxjs';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyRouterMiddleware, Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { useScroll } from 'react-router-scroll';
import 'sanitize.css/sanitize.css';

import { makeSelectLocationState } from './containers/App/selectors';
import LanguageProvider from './containers/LanguageProvider';
import { translationMessages } from './i18n';

import createRoutes from './routes';
import configureStore from './store';

// Import global styles and static files
import './styles/base.scss';
import './static';

const initialState = {};
const store = configureStore(initialState, browserHistory);
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: makeSelectLocationState()
});

ReactDOM.render(
  <Provider store={store}>
    <LanguageProvider messages={translationMessages}>
      <Router history={history} render={applyRouterMiddleware(useScroll())}>
        {createRoutes()}
      </Router>
    </LanguageProvider>
  </Provider>,
  document.getElementById('app')
);

if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
