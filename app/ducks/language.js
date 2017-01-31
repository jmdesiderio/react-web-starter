import { fromJS } from 'immutable';

// Action Types
export const DEFAULT_LOCALE = 'en';
export const CHANGE_LOCALE = 'app/LanguageToggle/CHANGE_LOCALE';

// Initial State
const initialState = fromJS({
  locale: DEFAULT_LOCALE
});

// Reducer
export default function languageReducer (state = initialState, action) {
  switch (action.type) {
    case CHANGE_LOCALE:
      return state
        .set('locale', action.locale);
    default:
      return state;
  }
}

// Actions
export function changeLocale (languageLocale) {
  return {
    type: CHANGE_LOCALE,
    locale: languageLocale
  };
}
