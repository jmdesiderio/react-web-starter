import { fromJS } from 'immutable'

import homeReducer, {
  CHANGE_USERNAME,
  changeUsername
} from './home'

describe('homeReducer', () => {
  let state
  beforeEach(() => {
    state = fromJS({
      username: ''
    })
  })

  it('should return the initial state', () => {
    const expectedResult = state
    expect(homeReducer(undefined, {})).toEqual(expectedResult)
  })

  it('should handle the changeUsername action correctly', () => {
    const fixture = 'mxstbr'
    const expectedResult = state.set('username', fixture)

    expect(homeReducer(state, changeUsername(fixture))).toEqual(expectedResult)
  })
})

describe('Home Actions', () => {
  describe('changeUsername', () => {
    it('should return the correct type and the passed name', () => {
      const fixture = 'Max'
      const expectedResult = {
        type: CHANGE_USERNAME,
        name: fixture
      }

      expect(changeUsername(fixture)).toEqual(expectedResult)
    })
  })
})
