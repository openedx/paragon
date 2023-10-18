import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

import Button from '../../Button';
import Card from '..';
import CardStatus from '../CardStatus';
import WarningFilled from '../../../icons/jsx/WarningFilled';

describe('correct rendering', () => {
  it('renders CardStatus element', () => {
    const tree = renderer.create((
      <CardStatus>Text</CardStatus>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders correct base className', () => {
    render(<CardStatus data-testid="card-status">Text</CardStatus>);
    expect(screen.getByTestId('card-status').className).toContain('pgn__card-status');
  });

  it('renders body with custom className', () => {
    const className = 'my-class-name';
    render(<CardStatus className={className} data-testid="card-status">Text</CardStatus>);
    expect(screen.getByTestId('card-status').className).toContain(className);
  });

  it('renders with correct variant', () => {
    const variant = 'primary';
    render(<CardStatus variant={variant} data-testid="card-status">Text</CardStatus>);
    expect(screen.getByTestId('card-status').className).toContain(`pgn__card-status__${variant}`);
  });

  it('renders with icon', () => {
    const icon = WarningFilled;
    const { container } = render(<CardStatus icon={icon}>Text</CardStatus>);
    expect(container.querySelector('svg')).toBeTruthy();
  });
  it('renders with title', () => {
    const titleText = 'Hello world!';
    render(<CardStatus title={titleText}>Text</CardStatus>);
    screen.getByText(titleText);
  });
  it('renders skeleton when card is in loading loading state', () => {
    render((
      <Card isLoading>
        <CardStatus>Text</CardStatus>
      </Card>
    ));
    screen.getByTestId('card-status-skeleton');
  });
  it('renders actions', () => {
    render((
      <CardStatus
        actions={<Button>Learn more</Button>}
      >
        Text
      </CardStatus>
    ));
    screen.getByText('Learn more');
  });
});
