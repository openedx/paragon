import React from 'react';
import { mount } from 'enzyme';
import renderer, { act } from 'react-test-renderer';
import { Context as ResponsiveContext } from 'react-responsive';
import breakpoints from '../utils/breakpoints';
import Button from '../Button';
import Alert from './index';
import { Info } from '../../icons';

describe('<Alert />', () => {
  it('renders without any props', () => {
    const tree = renderer.create((
      <Alert>Alert</Alert>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders with icon prop', () => {
    const tree = renderer.create((
      <Alert icon={Info}>Alert</Alert>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders with dismissible prop', () => {
    const tree = renderer.create((
      <Alert dismissible>Alert</Alert>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('handles dismissible onClose', () => {
    const mockOnClose = jest.fn();
    const wrapper = mount((
      <Alert onClose={mockOnClose} dismissible>Alert</Alert>
    ));
    wrapper.find('.btn').simulate('click');
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
  it('renders with button prop', () => {
    const tree = renderer.create((
      <Alert actions={[<Button>Hello</Button>]}>Alert</Alert>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('handles button onClick', () => {
    const mockOnClick = jest.fn();
    const wrapper = mount((
      <Alert actions={[<Button onClick={mockOnClick}>Hello</Button>]}>Alert</Alert>
    ));
    wrapper.find('.btn').simulate('click');
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
  it('renders with button and dismissible props', () => {
    const tree = renderer.create((
      <Alert actions={[<Button>Hello</Button>]} dismissible>Alert</Alert>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders with stacked prop', () => {
    const tree = renderer.create((
      <Alert stacked actions={[<Button>Hello</Button>]} dismissible>Alert</Alert>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('switches to stacked variant at extra small breakpoint', () => {
    let tree;
    act(() => {
      tree = renderer.create((
        <ResponsiveContext.Provider value={{ width: breakpoints.extraSmall.maxWidth }}>
          <Alert dismissible>Alert</Alert>
        </ResponsiveContext.Provider>
      )).toJSON();
    });
    expect(tree).toMatchSnapshot();
  });
});
