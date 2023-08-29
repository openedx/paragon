import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Container from './index';

const getClassNames = (container) => container.className.split(' ');

describe('<Container />', () => {
  it('displays children', () => {
    const { getByText } = render(<Container className="custom-class" size="md">Content</Container>);
    expect(getByText('Content')).toBeInTheDocument();
  });

  it('adds the .container-fluid class', () => {
    const { container } = render(<Container>Content</Container>);
    const containerElement = container.firstChild;
    expect(getClassNames(containerElement)).toContain('container-fluid');
  });

  it('adds the .container class', () => {
    const { container } = render(<Container fluid={false}>Content</Container>);
    const containerElement = container.firstChild;
    expect(getClassNames(containerElement)).toContain('container');
    expect(getClassNames(containerElement)).not.toContain('container-fluid');
  });

  ['xs', 'sm', 'md', 'lg', 'xl'].forEach((size) => {
    it(`adds the .container-mw-${size} class`, () => {
      const { container } = render(<Container size={size}>Content</Container>);
      const containerElement = container.firstChild;
      expect(getClassNames(containerElement)).toContain(`container-mw-${size}`);
    });
  });

  it('preserves custom class names', () => {
    const { container } = render(
      <Container className="custom-class" size="md">
        Content
      </Container>,
    );
    const containerElement = container.firstChild;
    expect(getClassNames(containerElement)).toContain('container-mw-md');
    expect(getClassNames(containerElement)).toContain('container-fluid');
    expect(getClassNames(containerElement)).toContain('custom-class');
  });
});
