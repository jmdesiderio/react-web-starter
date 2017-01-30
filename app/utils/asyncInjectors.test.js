import { memoryHistory } from 'react-router';
import { put } from 'redux-saga/effects';

import configureStore from '../store';

import {
  injectAsyncSagas,
  getAsyncInjectors
} from './asyncInjectors';

// Fixtures

function* testSaga () {
  yield put({ type: 'TEST', payload: 'yup' });
}

describe('asyncInjectors', () => {
  let store;

  describe('getAsyncInjectors', () => {
    beforeAll(() => {
      store = configureStore({}, memoryHistory);
    });

    it('should throw if passed invalid store shape', () => {
      let result = false;

      Reflect.deleteProperty(store, 'dispatch');

      try {
        getAsyncInjectors(store);
      } catch (err) {
        result = err.name === 'Invariant Violation';
      }

      expect(result).toBe(true);
    });
  });

  describe('helpers', () => {
    beforeAll(() => {
      store = configureStore({}, memoryHistory);
    });

    describe('injectAsyncSagas', () => {
      it('should throw if passed invalid saga', () => {
        let result = false;

        const injectSagas = injectAsyncSagas(store);

        try {
          injectSagas({ testSaga });
        } catch (err) {
          result = err.name === 'Invariant Violation';
        }

        try {
          injectSagas(testSaga);
        } catch (err) {
          result = err.name === 'Invariant Violation';
        }

        expect(result).toBe(true);
      });
    });
  });
});
