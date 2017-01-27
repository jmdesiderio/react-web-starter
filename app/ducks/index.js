import { combineReducers } from 'redux-immutable';

import global from './global';
import home from './home';
import language from './language';
import route from './route';

export default function rootReducer() {
  return combineReducers({
    global,
    home,
    language,
    route
  });
}
