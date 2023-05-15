import React from 'react';
import { mount } from 'enzyme';
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
    const body = mount(<CardBody />).find('div');

    expect(body.hasClass('pgn__card-body')).toBe(true);
  });

  it('renders correct variant', () => {
    const wrapper = mount(<Card variant="dark" />).find('div');
    expect(wrapper.hasClass('pgn__card-dark')).toBe(true);
  });

  it('renders body with custom className', () => {
    const className = 'my-class-name';
    const body = mount(<CardBody className={className} />).find('div');
    expect(body.hasClass('my-class-name')).toBe(true);
  });
});
