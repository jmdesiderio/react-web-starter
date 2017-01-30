// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from './containers/App';
import HomePage from './views/HomePage';
import FeaturePage from './views/FeaturePage';
import NotFoundPage from './views/NotFoundPage';

export default function createRoutes () {
  return (
    <Route path="/" component={App}>
      <IndexRoute
        getComponent={(nextState, cb) => {
          cb(null, HomePage);
        }}
      />
      <Route path="/features" component={FeaturePage} />
      <Route path="*" component={NotFoundPage} />
    </Route>
  );
}
