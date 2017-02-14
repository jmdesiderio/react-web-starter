import { fromJS } from 'immutable'
import { LOCATION_CHANGE } from 'react-router-redux'

// The reducer merges route location changes into our immutable state.
// The change is necessitated by moving to react-router-redux@4

// Initial state
const routeInitialState = fromJS({
  locationBeforeTransitions: null
})

// Reducer
export default function routeReducer (state = routeInitialState, action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return state.merge({
        locationBeforeTransitions: action.payload
      })
    default:
      return state
  }
}
