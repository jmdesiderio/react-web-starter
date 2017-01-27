import { combineReducers } from 'redux-immutable';

import globalReducer from './global';
import languageReducer from './language';
import routeReducer from './route';

// Creates the main reducer with the asynchronously loaded ones
export default function rootReducer(asyncReducers) {
  return combineReducers({
    global: globalReducer,
    language: languageReducer,
    route: routeReducer,
    ...asyncReducers
  });
}
