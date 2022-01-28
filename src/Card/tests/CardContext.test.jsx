import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import { CardContextProvider } from '../CardContext';
import Card from '../index';

describe('correct rendering', () => {
  it('renders a context element', () => {
    const tree = renderer.create((
      <CardContextProvider>Text</CardContextProvider>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders a context with correct props', () => {
    const wrapper = shallow((
      <Card orientation="horizontal" />
    ));
    const contextProvider = wrapper.find(CardContextProvider);
    expect(contextProvider.props().orientation).toBe('horizontal');
  });
});
