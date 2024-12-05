import React from 'react';
import { render, screen } from '@testing-library/react';

import BaseCard from '../BaseCard';

describe('BaseCard Component', () => {
  it('renders a default card', () => {
    render(<BaseCard>Default Card Content</BaseCard>);
    const cardElement = screen.getByText('Default Card Content');
    expect(cardElement).toBeInTheDocument();
    expect(cardElement).toHaveClass('card');
  });

  it('applies the correct background color', () => {
    render(<BaseCard bgColor="primary">Card with Background</BaseCard>);
    const cardElement = screen.getByText('Card with Background');
    expect(cardElement).toHaveClass('bg-primary');
  });

  it('applies the correct text color', () => {
    render(<BaseCard textColor="muted">Card with Text Color</BaseCard>);
    const cardElement = screen.getByText('Card with Text Color');
    expect(cardElement).toHaveClass('text-muted');
  });

  it('applies the correct border color', () => {
    render(<BaseCard borderColor="danger">Card with Border Color</BaseCard>);
    const cardElement = screen.getByText('Card with Border Color');
    expect(cardElement).toHaveClass('border-danger');
  });

  it('renders children inside CardBody when hasBody is true', () => {
    render(
      <BaseCard hasBody>
        <span>Content in CardBody</span>
      </BaseCard>,
    );
    const cardBodyElement = screen.getByText('Content in CardBody');
    expect(cardBodyElement).toBeInTheDocument();
    expect(cardBodyElement.closest('div')).toHaveClass('pgn__card-body');
  });

  it('renders children directly when hasBody is false', () => {
    render(
      <BaseCard>
        <span>Direct Content</span>
      </BaseCard>,
    );
    const contentElement = screen.getByText('Direct Content');
    expect(contentElement).toBeInTheDocument();
    expect(contentElement.closest('div')).not.toHaveClass('card-body');
  });

  it('supports a custom tag with the `as` prop', () => {
    render(
      <BaseCard as="section">
        <span>Custom Tag</span>
      </BaseCard>,
    );
    const sectionElement = screen.getByText('Custom Tag').closest('section');
    expect(sectionElement).toBeInTheDocument();
    expect(sectionElement).toHaveClass('card');
  });

  it('applies additional class names', () => {
    render(<BaseCard className="custom-class">Custom Class</BaseCard>);
    const cardElement = screen.getByText('Custom Class');
    expect(cardElement).toHaveClass('custom-class');
  });

  it('uses prefix correctly', () => {
    render(<BaseCard prefix="test-prefix">Prefixed Card</BaseCard>);
    const cardElement = screen.getByText('Prefixed Card');
    expect(cardElement).toHaveClass('test-prefix-card');
  });

  it('renders without children', () => {
    render(<BaseCard />);
    const cardElement = document.querySelector('.card');
    expect(cardElement).toBeInTheDocument();
  });
});
