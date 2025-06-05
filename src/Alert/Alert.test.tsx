import React from 'react';
import { IntlProvider } from 'react-intl';
import renderer, { act } from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Context as ResponsiveContext } from 'react-responsive';
import { Info } from '../../icons';
import breakpoints from '../utils/breakpoints';
import Button from '../Button';
import Alert, { AlertProps } from '.';

/** A compile time check. Whatever React elements this wraps won't run at runtime. */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function CompileCheck(_props: { children: React.ReactNode }) { return null; }

function AlertWrapper({ children, ...props }: AlertProps & { children: React.ReactNode }) {
  return (
    <IntlProvider locale="en" messages={{}}>
      <Alert {...props}>
        {children}
      </Alert>
    </IntlProvider>
  );
}

describe('Alert component type checking', () => {
  it('has correct typing', () => {
    <CompileCheck>
      <Alert>Basic alert</Alert>
      <Alert variant="primary">Primary alert</Alert>
      <Alert icon={Info}>Alert with icon</Alert>
      <Alert dismissible onClose={() => {}}>Dismissible alert</Alert>
      <Alert actions={[<Button key="action">Action</Button>]}>Alert with action</Alert>
      <Alert stacked>Stacked alert</Alert>
      <Alert closeLabel="Close">Custom close label</Alert>
      <Alert.Heading>Alert heading</Alert.Heading>
      <Alert.Link href="#">Alert link</Alert.Link>

      {/* @ts-expect-error Invalid variant */}
      <Alert variant="invalid" />
      {/* @ts-expect-error Invalid icon type */}
      <Alert icon="string" />
      {/* @ts-expect-error Invalid closeLabel type */}
      <Alert closeLabel={{}} />
      {/* @ts-expect-error Invalid Heading props */}
      <Alert.Heading href="#" />
      {/* @ts-expect-error Invalid Link props */}
      <Alert.Link variant="primary" />
    </CompileCheck>;
  });
});

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
  it('handles dismissible onClose', async () => {
    const mockOnClose = jest.fn();
    render(<AlertWrapper onClose={mockOnClose} dismissible>Alert</AlertWrapper>);
    const button = screen.getByRole('button');
    await userEvent.click(button);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
  it('renders with button prop', () => {
    const tree = renderer.create((
      <AlertWrapper actions={[<Button>Hello</Button>]}>Alert</AlertWrapper>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('handles button onClick', async () => {
    const mockOnClick = jest.fn();
    render(<AlertWrapper actions={[<Button onClick={mockOnClick}>Hello</Button>]}>Alert</AlertWrapper>);
    const button = screen.getByRole('button');
    await userEvent.click(button);
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
