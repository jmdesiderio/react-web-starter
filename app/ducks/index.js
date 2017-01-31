import { combineReducers } from 'redux-immutable';
import { combineEpics } from 'redux-observable';

import globalReducer, { getReposEpic } from './global';
import homeReducer from './home';
import languageReducer from './language';
import routeReducer from './route';

export function rootReducer () {
  return combineReducers({
    global: globalReducer,
    home: homeReducer,
    language: languageReducer,
    route: routeReducer
  });
}

export function rootEpic () {
  return combineEpics(
    getReposEpic
  );
}
