import { fromJS } from 'immutable'

import languageReducer, {
  CHANGE_LOCALE,
  changeLocale
} from './language'

describe('languageReducer', () => {
  it('returns the initial state', () => {
    expect(languageReducer(undefined, {})).toEqual(fromJS({
      locale: 'en'
    }))
  })

  it('changes the locale', () => {
    expect(languageReducer(undefined, { type: CHANGE_LOCALE, locale: 'de' }).toJS()).toEqual({
      locale: 'de'
    })
  })
})

describe('LanguageProvider actions', () => {
  describe('Change Local Action', () => {
    it('has a type of CHANGE_LOCALE', () => {
      const expected = {
        type: CHANGE_LOCALE,
        locale: 'de'
      }
      expect(changeLocale('de')).toEqual(expected)
    })
  })
})
