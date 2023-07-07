import React from 'react';
import { render } from '@testing-library/react';
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
    const { container } = render(<CardBody />);
    const body = container.querySelector('div');
    expect(body.classList.contains('pgn__card-body')).toBe(true);
  });

  it('renders correct variant', () => {
    const { container } = render(<Card variant="dark" />);
    const wrapper = container.querySelector('div');
    expect(wrapper.classList.contains('pgn__card-dark')).toBe(true);
  });

  it('renders body with custom className', () => {
    const className = 'my-class-name';
    const { container } = render(<CardBody className={className} />);
    const body = container.querySelector('div');
    expect(body.classList.contains(className)).toBe(true);
  });
});
