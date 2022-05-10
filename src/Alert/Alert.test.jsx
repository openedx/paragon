import React from 'react';
import { mount } from 'enzyme';
import { IntlProvider } from 'react-intl';
import renderer, { act } from 'react-test-renderer';
import { Context as ResponsiveContext } from 'react-responsive';
import breakpoints from '../utils/breakpoints';
import Button from '../Button';
import Alert from './index';
import { Info } from '../../icons';

// eslint-disable-next-line react/prop-types
const AlertWrapper = ({ children, ...props }) => (
  <IntlProvider locale="en" messages={{}}>
    <Alert {...props}>
      {children}
    </Alert>
  </IntlProvider>
);

describe('<Alert />', () => {
  it('renders without any props', () => {
    const tree = renderer.create((
      <AlertWrapper>Alert</AlertWrapper>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders with icon prop', () => {
    const tree = renderer.create((
      <AlertWrapper icon={Info}>Alert</AlertWrapper>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders with dismissible prop', () => {
    const tree = renderer.create((
      <AlertWrapper dismissible>Alert</AlertWrapper>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('handles dismissible onClose', () => {
    const mockOnClose = jest.fn();
    const wrapper = mount((
      <AlertWrapper onClose={mockOnClose} dismissible>Alert</AlertWrapper>
    ));
    wrapper.find('.btn').simulate('click');
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
  it('renders with button prop', () => {
    const tree = renderer.create((
      <AlertWrapper actions={[<Button>Hello</Button>]}>Alert</AlertWrapper>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('handles button onClick', () => {
    const mockOnClick = jest.fn();
    const wrapper = mount((
      <AlertWrapper actions={[<Button onClick={mockOnClick}>Hello</Button>]}>Alert</AlertWrapper>
    ));
    wrapper.find('.btn').simulate('click');
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
  it('renders with button and dismissible props', () => {
    const tree = renderer.create((
      <AlertWrapper actions={[<Button>Hello</Button>]} dismissible>Alert</AlertWrapper>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders with stacked prop', () => {
    const tree = renderer.create((
      <AlertWrapper stacked actions={[<Button>Hello</Button>]} dismissible>Alert</AlertWrapper>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('switches to stacked variant at extra small breakpoint', () => {
    let tree;
    act(() => {
      tree = renderer.create((
        <ResponsiveContext.Provider value={{ width: breakpoints.extraSmall.maxWidth }}>
          <AlertWrapper dismissible>Alert</AlertWrapper>
        </ResponsiveContext.Provider>
      )).toJSON();
    });
    expect(tree).toMatchSnapshot();
  });
});
