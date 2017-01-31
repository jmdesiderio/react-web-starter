import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import { routerMiddleware } from 'react-router-redux';
import { createEpicMiddleware } from 'redux-observable';

import { rootReducer, rootEpic } from './ducks';

const epicMiddleware = createEpicMiddleware(rootEpic());

export default function configureStore (initialState = {}, history) {
  const middlewares = applyMiddleware(
    epicMiddleware,
    routerMiddleware(history)
  );

  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
  /* eslint-enable */

  const store = createStore(
    rootReducer(),
    fromJS(initialState),
    composeEnhancers(middlewares)
  );

  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./ducks', () => {
      import('./ducks').then(rootReducerModule => {
        const nextRootReducer = rootReducerModule.rootReducer;
        store.replaceReducer(nextRootReducer);
      });
    });
  }

  return store;
}
