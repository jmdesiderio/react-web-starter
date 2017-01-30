// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from './utils/asyncInjectors';

import HomePage from './views/HomePage';
import FeaturePage from './views/FeaturePage';
import NotFoundPage from './views/NotFoundPage';

import HomePageSagas from './views/HomePage/sagas';

export default function createRoutes (store) {
  const { injectSagas } = getAsyncInjectors(store);

  return [
    {
      path: '/',
      getComponent (nextState, cb) {
        injectSagas(HomePageSagas);
        cb(null, HomePage);
      }
    }, {
      path: '/features',
      component: FeaturePage
    }, {
      path: '*',
      component: NotFoundPage
    }
  ];
}
