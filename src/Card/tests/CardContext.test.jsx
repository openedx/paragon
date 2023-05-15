import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import { CardContextProvider } from '../CardContext';
import Card from '..';

describe('correct rendering', () => {
  it('renders a context element', () => {
    const tree = renderer.create((
      <CardContextProvider>Text</CardContextProvider>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders a context with correct props', () => {
    const wrapper = mount((
      <Card orientation="horizontal" />
    ));
    const contextProvider = wrapper.find(CardContextProvider);
    expect(contextProvider.props().orientation).toBe('horizontal');
  });
});
