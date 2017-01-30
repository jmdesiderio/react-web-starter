import { combineReducers } from 'redux-immutable';

import { globalReducer, globalSaga } from './global';
import { homeReducer } from './home';
import { languageReducer } from './language';
import { routeReducer } from './route';

export function rootReducer () {
  return combineReducers({
    global: globalReducer,
    home: homeReducer,
    language: languageReducer,
    route: routeReducer
  });
}

export function* rootSaga () {
  yield [
    globalSaga()
  ];
}
