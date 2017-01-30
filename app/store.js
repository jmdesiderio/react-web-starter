import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './ducks';
// import rootSaga from './sagas';
import githubData from './sagas/home';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore (initialState = {}, history) {
  const middlewares = [
    sagaMiddleware,
    routerMiddleware(history)
  ];

  const enhancers = [
    applyMiddleware(...middlewares)
  ];

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
    composeEnhancers(...enhancers)
  );

  // Extensions
  sagaMiddleware.run(githubData);

  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./ducks', () => {
      import('./ducks').then(rootReducerModule => {
        const nextRootReducer = rootReducerModule.default;
        store.replaceReducer(nextRootReducer());
      });
    });
  }

  return store;
}
