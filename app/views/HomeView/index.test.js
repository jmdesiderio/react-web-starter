import React from 'react'
import { shallow, mount } from 'enzyme'
import { IntlProvider } from 'react-intl'

import ReposList from '../../components/ReposList'
import {
  HomeView,
  mapDispatchToProps,
  AtPrefix,
  CenteredSection,
  Form,
  Input,
  Section
} from './index'
import { changeUsername } from '../../ducks/home'
import { loadRepos } from '../../ducks/global'

describe('<HomeView />', () => {
  it('should render the repos list', () => {
    const renderedComponent = shallow(
      <HomeView loading error={false} repos={[]} />
    )
    expect(renderedComponent.contains(<ReposList loading error={false} repos={[]} />)).toEqual(true)
  })

  it('should render fetch the repos on mount if a username exists', () => {
    const submitSpy = jest.fn()
    mount(
      <IntlProvider locale='en'>
        <HomeView username='Not Empty'
          onChangeUsername={() => {}}
          onSubmitForm={submitSpy} />
      </IntlProvider>
    )
    expect(submitSpy).toHaveBeenCalled()
  })

  describe('mapDispatchToProps', () => {
    describe('onChangeUsername', () => {
      it('should be injected', () => {
        const dispatch = jest.fn()
        const result = mapDispatchToProps(dispatch)
        expect(result.onChangeUsername).toBeDefined()
      })

      it('should dispatch changeUsername when called', () => {
        const dispatch = jest.fn()
        const result = mapDispatchToProps(dispatch)
        const username = 'mxstbr'
        result.onChangeUsername({ target: { value: username } })
        expect(dispatch).toHaveBeenCalledWith(changeUsername(username))
      })
    })
  })

  describe('onSubmitForm', () => {
    it('should be injected', () => {
      const dispatch = jest.fn()
      const result = mapDispatchToProps(dispatch)
      expect(result.onSubmitForm).toBeDefined()
    })

    it('should dispatch loadRepos when called', () => {
      const dispatch = jest.fn()
      const result = mapDispatchToProps(dispatch)
      result.onSubmitForm()
      expect(dispatch).toHaveBeenCalledWith(loadRepos())
    })

    it('should preventDefault if called with event', () => {
      const preventDefault = jest.fn()
      const result = mapDispatchToProps(() => {})
      const evt = { preventDefault }
      result.onSubmitForm(evt)
      expect(preventDefault).toHaveBeenCalledWith()
    })
  })
})

describe('<AtPrefix />', () => {
  it('should render an <span> tag', () => {
    const renderedComponent = shallow(<AtPrefix />)
    expect(renderedComponent.type()).toEqual('span')
  })

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<AtPrefix />)
    expect(renderedComponent.prop('className')).toBeDefined()
  })

  it('should adopt a valid attribute', () => {
    const id = 'test'
    const renderedComponent = shallow(<AtPrefix id={id} />)
    expect(renderedComponent.prop('id')).toEqual(id)
  })

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<AtPrefix attribute={'test'} />)
    expect(renderedComponent.prop('attribute')).toBeUndefined()
  })
})

describe('<CenteredSection />', () => {
  it('should render an <section> tag', () => {
    const renderedComponent = shallow(<CenteredSection />)
    expect(renderedComponent.type()).toEqual('section')
  })

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<CenteredSection />)
    expect(renderedComponent.prop('className')).toBeDefined()
  })

  it('should adopt a valid attribute', () => {
    const id = 'test'
    const renderedComponent = shallow(<CenteredSection id={id} />)
    expect(renderedComponent.prop('id')).toEqual(id)
  })

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<CenteredSection attribute={'test'} />)
    expect(renderedComponent.prop('attribute')).toBeUndefined()
  })
})

describe('<Form />', () => {
  it('should render an <form> tag', () => {
    const renderedComponent = shallow(<Form />)
    expect(renderedComponent.type()).toEqual('form')
  })

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<Form />)
    expect(renderedComponent.prop('className')).toBeDefined()
  })

  it('should adopt a valid attribute', () => {
    const id = 'test'
    const renderedComponent = shallow(<Form id={id} />)
    expect(renderedComponent.prop('id')).toEqual(id)
  })

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<Form attribute={'test'} />)
    expect(renderedComponent.prop('attribute')).toBeUndefined()
  })
})

describe('<Input />', () => {
  it('should render an <input> tag', () => {
    const renderedComponent = shallow(<Input />)
    expect(renderedComponent.type()).toEqual('input')
  })

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<Input />)
    expect(renderedComponent.prop('className')).toBeDefined()
  })

  it('should adopt a valid attribute', () => {
    const id = 'test'
    const renderedComponent = shallow(<Input id={id} />)
    expect(renderedComponent.prop('id')).toEqual(id)
  })

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<Input attribute={'test'} />)
    expect(renderedComponent.prop('attribute')).toBeUndefined()
  })
})

describe('<Section />', () => {
  it('should render an <section> tag', () => {
    const renderedComponent = shallow(<Section />)
    expect(renderedComponent.type()).toEqual('section')
  })

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<Section />)
    expect(renderedComponent.prop('className')).toBeDefined()
  })

  it('should adopt a valid attribute', () => {
    const id = 'test'
    const renderedComponent = shallow(<Section id={id} />)
    expect(renderedComponent.prop('id')).toEqual(id)
  })

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<Section attribute={'test'} />)
    expect(renderedComponent.prop('attribute')).toBeUndefined()
  })
})
