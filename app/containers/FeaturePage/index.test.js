import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import messages from './messages';
import FeaturePage, {
  List,
  ListItem,
  ListItemTitle
} from './index';

describe('<FeaturePage />', () => {
  it('should render its heading', () => {
    const renderedComponent = shallow(
      <FeaturePage />
    );
    expect(renderedComponent.contains(
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
    )).toBe(true);
  });
});

describe('<List />', () => {
  it('should render an <ul> tag', () => {
    const renderedComponent = shallow(<List />);
    expect(renderedComponent.type()).toEqual('ul');
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<List />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<List id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<List attribute={'test'} />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});

describe('<ListItem />', () => {
  it('should render an <li> tag', () => {
    const renderedComponent = shallow(<ListItem />);
    expect(renderedComponent.type()).toEqual('li');
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<ListItem />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<ListItem id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<ListItem attribute={'test'} />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});

describe('<ListItemTitle />', () => {
  it('should render an <p> tag', () => {
    const renderedComponent = shallow(<ListItemTitle />);
    expect(renderedComponent.type()).toEqual('p');
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<ListItemTitle />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<ListItemTitle id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<ListItemTitle attribute={'test'} />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
