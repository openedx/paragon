import React from 'react';
import { mount } from 'enzyme';
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
    const wrapper = mount(<CardStatus>Text</CardStatus>);
    expect(wrapper.find('.pgn__card-status').length).toBeGreaterThan(0);
  });
  it('renders body with custom className', () => {
    const className = 'my-class-name';
    const wrapper = mount(<CardStatus className={className}>Text</CardStatus>);
    expect(wrapper.find('.my-class-name').length).toBeGreaterThan(0);
  });
  it('renders with correct variant', () => {
    const variant = 'primary';
    const wrapper = mount(<CardStatus variant={variant}>Text</CardStatus>);
    expect(wrapper.find('.pgn__card-status__primary').length).toBeGreaterThan(0);
  });
  it('renders with icon', () => {
    const icon = WarningFilled;
    const wrapper = mount(<CardStatus icon={icon}>Text</CardStatus>);
    expect(wrapper.find('.pgn__icon').length).toBeGreaterThan(0);
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
