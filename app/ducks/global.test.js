import { fromJS } from 'immutable';
import { put, takeLatest } from 'redux-saga/effects';

import globalReducer, {
  LOAD_REPOS,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_ERROR,
  loadRepos,
  reposLoaded,
  repoLoadingError,
  getRepos,
  globalSaga
} from './global';

describe('globalReducer', () => {
  let state;

  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: false,
      currentUser: false,
      userData: fromJS({
        repositories: false
      })
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(globalReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadRepos action correctly', () => {
    const expectedResult = state
      .set('loading', true)
      .set('error', false)
      .setIn(['userData', 'repositories'], false);

    expect(globalReducer(state, loadRepos())).toEqual(expectedResult);
  });

  it('should handle the reposLoaded action correctly', () => {
    const fixture = [{
      name: 'My Repo'
    }];
    const username = 'test';
    const expectedResult = state
      .setIn(['userData', 'repositories'], fixture)
      .set('loading', false)
      .set('currentUser', username);

    expect(globalReducer(state, reposLoaded(fixture, username))).toEqual(expectedResult);
  });

  it('should handle the repoLoadingError action correctly', () => {
    const fixture = {
      msg: 'Not found'
    };
    const expectedResult = state
      .set('error', fixture)
      .set('loading', false);

    expect(globalReducer(state, repoLoadingError(fixture))).toEqual(expectedResult);
  });
});

describe('App Actions', () => {
  describe('loadRepos', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_REPOS
      };

      expect(loadRepos()).toEqual(expectedResult);
    });
  });

  describe('reposLoaded', () => {
    it('should return the correct type and the passed repos', () => {
      const fixture = ['Test'];
      const username = 'test';
      const expectedResult = {
        type: LOAD_REPOS_SUCCESS,
        repos: fixture,
        username
      };

      expect(reposLoaded(fixture, username)).toEqual(expectedResult);
    });
  });

  describe('repoLoadingError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!'
      };
      const expectedResult = {
        type: LOAD_REPOS_ERROR,
        error: fixture
      };

      expect(repoLoadingError(fixture)).toEqual(expectedResult);
    });
  });
});

/* eslint-disable redux-saga/yield-effects */
describe('getRepos Saga', () => {
  const username = 'mxstbr';
  let getReposGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getReposGenerator = getRepos();

    const selectDescriptor = getReposGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = getReposGenerator.next(username).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the reposLoaded action if it requests the data successfully', () => {
    const response = [{
      name: 'First repo'
    }, {
      name: 'Second repo'
    }];
    const putDescriptor = getReposGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(reposLoaded(response, username)));
  });

  it('should call the repoLoadingError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getReposGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(repoLoadingError(response)));
  });
});

describe('globalSaga Saga', () => {
  const homeDataSaga = globalSaga();

  it('should start task to watch for LOAD_REPOS action', () => {
    const takeLatestDescriptor = homeDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_REPOS, getRepos));
  });
});
