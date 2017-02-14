import { combineReducers } from 'redux-immutable'
import { combineEpics } from 'redux-observable'
import { reducer as formReducer } from 'redux-form/immutable'

import globalReducer, { getReposEpic } from './global'
import homeReducer from './home'
import languageReducer from './language'
import routeReducer from './route'

export function rootReducer () {
  return combineReducers({
    form: formReducer,
    global: globalReducer,
    home: homeReducer,
    language: languageReducer,
    route: routeReducer
  })
}

export function rootEpic () {
  return combineEpics(
    getReposEpic
  )
}
