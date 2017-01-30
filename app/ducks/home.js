import { fromJS } from 'immutable';

// Action Types
export const CHANGE_USERNAME = 'boilerplate/Home/CHANGE_USERNAME';

// Initial State
const initialState = fromJS({
  username: ''
});

// Reducer
export function homeReducer (state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERNAME:
      return state
        .set('username', action.name.replace(/@/gi, ''));
    default:
      return state;
  }
}

// Actions
export function changeUsername (name) {
  return {
    type: CHANGE_USERNAME,
    name
  };
}
