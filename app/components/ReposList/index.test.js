import { shallow, mount } from 'enzyme'
import React from 'react'
import { IntlProvider } from 'react-intl'

import RepoListItem from '../RepoListItem'
import List from '../List'
import LoadingIndicator from '../LoadingIndicator'

import ReposList from './index'

describe('<ReposList />', () => {
  it('should render the loading indicator when its loading', () => {
    const renderedComponent = shallow(
      <ReposList loading />
    )
    expect(renderedComponent.contains(<List component={LoadingIndicator} />)).toEqual(true)
  })

  it('should render an error if loading failed', () => {
    const renderedComponent = mount(
      <IntlProvider locale='en'>
        <ReposList error={{ message: 'Loading failed!' }}
          loading={false} />
      </IntlProvider>
    )
    expect(renderedComponent.text()).toMatch(/Something went wrong/)
  })

  it('should render the repositories if loading was successful', () => {
    const repos = [{
      owner: {
        login: 'mxstbr'
      },
      html_url: 'https://github.com/react-boilerplate/react-boilerplate',
      name: 'react-boilerplate',
      open_issues_count: 20,
      full_name: 'react-boilerplate/react-boilerplate'
    }]
    const renderedComponent = shallow(
      <ReposList error={false}
        repos={repos} />
    )

    expect(renderedComponent.contains(<List component={RepoListItem} items={repos} />)).toEqual(true)
  })

  it('should not render anything if nothing interesting is provided', () => {
    const renderedComponent = shallow(
      <ReposList error={false}
        loading={false}
        repos={false} />
    )

    expect(renderedComponent.html()).toEqual(null)
  })
})
