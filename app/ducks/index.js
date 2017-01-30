import { combineReducers } from 'redux-immutable';

import global, { globalSaga } from './global';
import home from './home';
import language from './language';
import route from './route';

export function rootReducer () {
  return combineReducers({
    global,
    home,
    language,
    route
  });
}

export function* rootSaga () {
  yield [
    globalSaga()
  ];
}
