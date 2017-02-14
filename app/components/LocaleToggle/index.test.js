import React from 'react'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'
import { shallow, mount } from 'enzyme'

import configureStore from '../../store'
import { translationMessages } from '../../i18n'
import { changeLocale } from '../../ducks/language'
import LanguageProvider from '../../containers/LanguageProvider'

import LocaleToggle, { mapDispatchToProps, Wrapper } from './index'

describe('<LocaleToggle />', () => {
  let store

  beforeAll(() => {
    store = configureStore({}, browserHistory)
  })

  it('should render the default language messages', () => {
    const renderedComponent = shallow(
      <Provider store={store}>
        <LanguageProvider messages={translationMessages}>
          <LocaleToggle />
        </LanguageProvider>
      </Provider>
    )
    expect(renderedComponent.contains(<LocaleToggle />)).toBe(true)
  })

  it('should present the default `en` english language option', () => {
    const renderedComponent = mount(
      <Provider store={store}>
        <LanguageProvider messages={translationMessages}>
          <LocaleToggle />
        </LanguageProvider>
      </Provider>
    )
    expect(renderedComponent.contains(<option value='en'>en</option>)).toBe(true)
  })

  describe('mapDispatchToProps', () => {
    describe('onLocaleToggle', () => {
      it('should be injected', () => {
        const dispatch = jest.fn()
        const result = mapDispatchToProps(dispatch)
        expect(result.onLocaleToggle).toBeDefined()
      })

      it('should dispatch changeLocale when called', () => {
        const dispatch = jest.fn()
        const result = mapDispatchToProps(dispatch)
        const locale = 'de'
        const evt = { target: { value: locale } }
        result.onLocaleToggle(evt)
        expect(dispatch).toHaveBeenCalledWith(changeLocale(locale))
      })
    })
  })
})

describe('<Wrapper />', () => {
  it('should render an <div> tag', () => {
    const renderedComponent = shallow(<Wrapper />)
    expect(renderedComponent.type()).toEqual('div')
  })

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<Wrapper />)
    expect(renderedComponent.prop('className')).toBeDefined()
  })

  it('should adopt a valid attribute', () => {
    const id = 'test'
    const renderedComponent = shallow(<Wrapper id={id} />)
    expect(renderedComponent.prop('id')).toEqual(id)
  })

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<Wrapper attribute={'test'} />)
    expect(renderedComponent.prop('attribute')).toBeUndefined()
  })
})
