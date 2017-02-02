// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from './containers/App';

import HomeView from './views/HomeView';
import FeaturesView from './views/FeaturesView';
import LoginView from './views/LoginView';
import NotFoundView from './views/NotFoundView';

export default function createRoutes () {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={HomeView} />
      <Route path="/features" component={FeaturesView} />
      <Route path="/login" component={LoginView} />
      <Route path="*" component={NotFoundView} />
    </Route>
  );
}
