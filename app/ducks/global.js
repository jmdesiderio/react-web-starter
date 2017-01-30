import { fromJS } from 'immutable';
import { call, put, select, takeLatest } from 'redux-saga/effects';

import request from '../utils/request';
import { makeSelectUsername } from '../views/HomePage/selectors';

// Action Types
export const LOAD_REPOS = 'boilerplate/App/LOAD_REPOS';
export const LOAD_REPOS_SUCCESS = 'boilerplate/App/LOAD_REPOS_SUCCESS';
export const LOAD_REPOS_ERROR = 'boilerplate/App/LOAD_REPOS_ERROR';
export const DEFAULT_LOCALE = 'en';

// Initial State
const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false
  }
});

// Reducer
export default function globalReducer (state = initialState, action) {
  switch (action.type) {
    case LOAD_REPOS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['userData', 'repositories'], false);
    case LOAD_REPOS_SUCCESS:
      return state
        .setIn(['userData', 'repositories'], action.repos)
        .set('loading', false)
        .set('currentUser', action.username);
    case LOAD_REPOS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

// Actions
export function loadRepos () {
  return {
    type: LOAD_REPOS
  };
}

export function reposLoaded (repos, username) {
  return {
    type: LOAD_REPOS_SUCCESS,
    repos,
    username
  };
}

export function repoLoadingError (error) {
  return {
    type: LOAD_REPOS_ERROR,
    error
  };
}

// Sagas
export function* getRepos () {
  const username = yield select(makeSelectUsername());
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    const repos = yield call(request, requestURL);
    yield put(reposLoaded(repos, username));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

export function* globalSaga () {
  yield takeLatest(LOAD_REPOS, getRepos);
}