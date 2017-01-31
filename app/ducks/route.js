import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

// Initial state
const routeInitialState = fromJS({
  locationBeforeTransitions: null
});

// Reducer
export default function routeReducer (state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        locationBeforeTransitions: action.payload
      });
    default:
      return state;
  }
}
