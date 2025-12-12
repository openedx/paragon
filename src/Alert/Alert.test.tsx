import React from 'react';
import { IntlProvider } from 'react-intl';
import { Context as ResponsiveContext } from 'react-responsive';
import {
  assert,
  describe,
  mock,
  it,
  render,
  renderer,
  screen,
  userEvent,
  within,
} from '../testUtils';
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
  it('renders without any props', (t) => {
    const tree = renderer.create((
      <AlertWrapper>Alert</AlertWrapper>
    )).toJSON();
    t.assert.snapshot(tree);
  });
  it('renders with icon prop', (t) => {
    const tree = renderer.create((
      <AlertWrapper icon={Info}>Alert</AlertWrapper>
    )).toJSON();
    t.assert.snapshot(tree);
  });
  it('renders with dismissible prop', (t) => {
    const tree = renderer.create((
      <AlertWrapper dismissible>Alert</AlertWrapper>
    )).toJSON();
    t.assert.snapshot(tree);
  });
  it('handles dismissible onClose', async () => {
    const mockOnClose = mock.fn();
    render(<AlertWrapper onClose={mockOnClose} dismissible>Alert</AlertWrapper>);
    const button = screen.getByRole('button');
    await userEvent.click(button);
    assert.wasCalled(mockOnClose);
  });
  it('renders with button prop', (t) => {
    const tree = renderer.create((
      <AlertWrapper actions={[<Button>Hello</Button>]}>Alert</AlertWrapper>
    )).toJSON();
    t.assert.snapshot(tree);
  });
  it('handles button onClick', async () => {
    const mockOnClick = mock.fn();
    render(<AlertWrapper actions={[<Button onClick={mockOnClick}>Hello</Button>]}>Alert</AlertWrapper>);
    const button = screen.getByRole('button');
    await userEvent.click(button);
    assert.wasCalled(mockOnClick);
  });
  it('renders with button and dismissible props', (t) => {
    const tree = renderer.create((
      <AlertWrapper actions={[<Button>Hello</Button>]} dismissible>Alert</AlertWrapper>
    )).toJSON();
    t.assert.snapshot(tree);
  });
  it('renders with stacked prop', (t) => {
    const tree = renderer.create((
      <AlertWrapper stacked actions={[<Button>Hello</Button>]} dismissible>Alert</AlertWrapper>
    )).toJSON();
    t.assert.snapshot(tree);
  });
  it('switches to stacked variant at extra small breakpoint', (t) => {
    const tree = renderer.create((
      <ResponsiveContext.Provider value={{ width: breakpoints.extraSmall.maxWidth }}>
        <AlertWrapper dismissible>Alert</AlertWrapper>
      </ResponsiveContext.Provider>
    )).toJSON();
    t.assert.snapshot(tree);
  });
  it('renders with headings and links', async () => {
    render(
      <AlertWrapper>
        <Alert.Heading>This is the heading</Alert.Heading>
        And <Alert.Link href="#">here is a link</Alert.Link>.
      </AlertWrapper>,
    );
    const alertDiv = screen.getByRole('alert');
    const heading = within(alertDiv).getByText(/This is the heading/);
    assert.containsClass(heading, 'alert-heading');
    assert.containsClass(heading, 'h4');
    const link = within(alertDiv).getByRole('link', { name: 'here is a link' });
    assert.containsClass(link, 'alert-link');
  });
});
