import React from 'react'
import { shallow } from 'enzyme'
import { IntlProvider, defineMessages } from 'react-intl'

import Toggle from './index'

describe('<Toggle />', () => {
  it('should contain default text', () => {
    const defaultEnMessage = 'someContent'
    const defaultDeMessage = 'someOtherContent'
    const messages = defineMessages({
      en: {
        id: 'boilerplate.containers.LocaleToggle.en',
        defaultMessage: defaultEnMessage
      },
      de: {
        id: 'boilerplate.containers.LocaleToggle.en',
        defaultMessage: defaultDeMessage
      }
    })
    const renderedComponent = shallow(
      <IntlProvider locale='en'>
        <Toggle messages={messages} values={['en', 'de']} />
      </IntlProvider>
    )
    expect(renderedComponent.contains(<Toggle messages={messages} values={['en', 'de']} />)).toBe(true)
  })
})
