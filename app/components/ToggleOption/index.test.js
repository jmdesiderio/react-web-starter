import React from 'react'
import { shallow, mount } from 'enzyme'
import { IntlProvider, defineMessages } from 'react-intl'

import ToggleOption from './index'

describe('<ToggleOption />', () => {
  it('should render default language messages', () => {
    const defaultEnMessage = 'someContent'
    const message = defineMessages({
      enMessage: {
        id: 'boilerplate.containers.LocaleToggle.en',
        defaultMessage: defaultEnMessage
      }
    })
    const renderedComponent = shallow(
      <IntlProvider locale='en'>
        <ToggleOption message={message.enMessage} value='en' />
      </IntlProvider>
    )
    expect(renderedComponent.contains(<ToggleOption message={message.enMessage} value='en' />)).toBe(true)
  })

  it('should display `value`(two letter language code) when `message` is absent', () => {
    const renderedComponent = mount(
      <IntlProvider locale='de'>
        <ToggleOption value='de' />
      </IntlProvider>
    )
    expect(renderedComponent.text()).toBe('de')
  })
})
