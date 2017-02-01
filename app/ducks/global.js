import { fromJS } from 'immutable';
import { ajax } from 'rxjs/observable/dom/ajax';

// Action Types
export const LOAD_REPOS = 'app/global/LOAD_REPOS';
export const LOAD_REPOS_SUCCESS = 'app/global/LOAD_REPOS_SUCCESS';
export const LOAD_REPOS_ERROR = 'app/global/LOAD_REPOS_ERROR';

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
        .setIn(['userData', 'repositories'], action.payload.repos)
        .set('loading', false)
        .set('currentUser', action.payload.username);
    case LOAD_REPOS_ERROR:
      return state
        .set('error', action.payload.error)
        .set('loading', false);
    default:
      return state;
  }
}

// Actions
export function loadRepos (username) {
  return {
    type: LOAD_REPOS,
    payload: {
      username
    }
  };
}

export function reposLoaded (username, repos) {
  return {
    type: LOAD_REPOS_SUCCESS,
    payload: {
      username,
      repos
    }
  };
}

export function repoLoadingError (error) {
  return {
    type: LOAD_REPOS_ERROR,
    payload: {
      error
    }
  };
}

// Sagas
export function getReposEpic (action$) {
  return action$.ofType(LOAD_REPOS)
    .map(action => action.payload.username)
    .switchMap(username =>
      ajax.getJSON(`https://api.github.com/users/${username}/repos?type=all&sort=updated`)
        .map(reposLoaded.bind(null, username))
        .catch(err => repoLoadingError(err))
    );
}
