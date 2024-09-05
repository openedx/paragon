import React from 'react';
import { render } from '@testing-library/react';
import Container, { type ContainerSize } from '.';

const getClassNames = (container: HTMLElement) => container.className.split(' ');

describe('<Container />', () => {
  it('displays children', () => {
    const { getByText } = render(<Container className="custom-class" size="md">Content</Container>);
    expect(getByText('Content')).toBeInTheDocument();
  });

  it('adds the .container-fluid class', () => {
    const { container } = render(<Container>Content</Container>);
    const containerElement = container.firstChild as HTMLElement;
    expect(getClassNames(containerElement)).toContain('container-fluid');
  });

  it('adds the .container class', () => {
    const { container } = render(<Container fluid={false}>Content</Container>);
    const containerElement = container.firstChild as HTMLElement;
    expect(getClassNames(containerElement!)).toContain('container');
    expect(getClassNames(containerElement)).not.toContain('container-fluid');
  });

  ['xs', 'sm', 'md', 'lg', 'xl'].forEach((size: ContainerSize) => {
    it(`adds the .container-mw-${size} class`, () => {
      const { container } = render(<Container size={size}>Content</Container>);
      const containerElement = container.firstChild as HTMLElement;
      expect(getClassNames(containerElement)).toContain(`container-mw-${size}`);
    });
  });

  it('does not add a size class when size is not specified', () => {
    const { container } = render(<Container>Content</Container>);
    const containerElement = container.firstChild as HTMLElement;
    expect(getClassNames(containerElement)).toEqual(['container-fluid']);
  });

  it('preserves custom class names', () => {
    const { container } = render(
      <Container className="custom-class" size="md">
        Content
      </Container>,
    );
    const containerElement = container.firstChild as HTMLElement;
    expect(getClassNames(containerElement)).toContain('container-mw-md');
    expect(getClassNames(containerElement)).toContain('container-fluid');
    expect(getClassNames(containerElement)).toContain('custom-class');
  });
});
