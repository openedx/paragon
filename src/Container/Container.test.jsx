import React from 'react';
import { mount } from 'enzyme';
import Container from './index';

const getClassNames = container => container.props().className.split(' ');

describe('<Container />', () => {
  it('displays children', () => {
    const wrapper = mount(<Container className="custom-class" size="md">Content</Container>);
    expect(wrapper.text()).toEqual('Content');
  });

  it('adds the .container-fluid class', () => {
    const container = mount(<Container>Content</Container>).find('div');
    expect(getClassNames(container)).toContain('container-fluid');
  });

  it('adds the .container class', () => {
    const container = mount(<Container fluid={false}>Content</Container>).find('div');
    expect(getClassNames(container)).toContain('container');
    expect(getClassNames(container)).not.toContain('container-fluid');
  });

  ['xs', 'sm', 'md', 'lg', 'xl'].forEach((size) => {
    it(`adds the .container-mw-${size} class`, () => {
      const container = mount(<Container size={size}>Content</Container>).find('div');
      expect(getClassNames(container)).toContain(`container-mw-${size}`);
    });
  });

  it('preserves custom class names', () => {
    const container = mount((
      <Container className="custom-class" size="md">
        Content
      </Container>
    )).find('div');
    expect(getClassNames(container)).toContain('container-mw-md');
    expect(getClassNames(container)).toContain('container-fluid');
    expect(getClassNames(container)).toContain('custom-class');
  });
});
