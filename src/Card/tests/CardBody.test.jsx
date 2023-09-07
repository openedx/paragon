import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import CardBody from '../CardBody';
import Card from '..';

describe('correct rendering', () => {
  it('renders CardBody element', () => {
    const tree = renderer.create((
      <CardBody>Text</CardBody>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correct base className', () => {
    render(<CardBody data-testid="card-body" />);
    const body = screen.getByTestId('card-body');
    expect(body.classList.contains('pgn__card-body')).toBe(true);
  });

  it('renders correct variant', () => {
    render(<Card variant="dark" data-testid="card" />);
    const wrapper = screen.getByTestId('card');
    expect(wrapper.classList.contains('pgn__card-dark')).toBe(true);
  });

  it('renders body with custom className', () => {
    const className = 'my-class-name';
    render(<CardBody className={className} data-testid="card-body" />);
    const body = screen.getByTestId('card-body');
    expect(body.classList.contains(className)).toBe(true);
  });
});
