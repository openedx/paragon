import React from 'react';
import { mount } from 'enzyme';
import renderer, { act } from 'react-test-renderer';
import { Context as ResponsiveContext } from 'react-responsive';
import { breakpoints } from '../Responsive';
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
    const buttonProps = {
      buttonText: 'Hello',
      variant: 'brand',
    };
    const tree = renderer.create((
      <Alert button={buttonProps}>Alert</Alert>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('handles button onClick', () => {
    const mockOnClick = jest.fn();
    const buttonProps = {
      buttonText: 'Hello',
      onClick: mockOnClick,
    };
    const wrapper = mount((
      <Alert button={buttonProps}>Alert</Alert>
    ));
    wrapper.find('.btn').simulate('click');
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
  it('renders with button and dismissible props', () => {
    const buttonProps = {
      buttonText: 'Hello',
    };
    const tree = renderer.create((
      <Alert button={buttonProps} dismissible>Alert</Alert>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders with stacked prop', () => {
    const buttonProps = {
      buttonText: 'Hello',
    };
    const tree = renderer.create((
      <Alert stacked button={buttonProps} dismissible>Alert</Alert>
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
