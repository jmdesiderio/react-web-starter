/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import {
  LOAD_REPOS,
  reposLoaded,
  repoLoadingError
} from '../ducks/global';

import request from '../utils/request';
import { makeSelectUsername } from '../views/HomePage/selectors';

/**
 * Github repos request/response handler
 */
export function* getRepos () {
  // Select username from store
  const username = yield select(makeSelectUsername());
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(reposLoaded(repos, username));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* homeSaga () {
  yield takeLatest(LOAD_REPOS, getRepos);
}
