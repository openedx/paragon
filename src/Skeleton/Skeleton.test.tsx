import React from 'react';
import { render, screen } from '@testing-library/react';
import Skeleton, { SkeletonTheme } from '.';

function getSkeleton() {
  return screen.getByTestId('skeleton-container').querySelector('.react-loading-skeleton') as HTMLElement;
}

describe('<Skeleton />', () => {
  it('leaves colors to the theme when no overrides are given', () => {
    render(<Skeleton containerTestId="skeleton-container" />);
    const skeleton = getSkeleton();
    expect(skeleton.style.getPropertyValue('--base-color')).toBe('');
    expect(skeleton.style.getPropertyValue('--highlight-color')).toBe('');
  });

  it('applies colors from SkeletonTheme', () => {
    render(
      <SkeletonTheme baseColor="red" highlightColor="blue">
        <Skeleton containerTestId="skeleton-container" />
      </SkeletonTheme>,
    );
    const skeleton = getSkeleton();
    expect(skeleton.style.getPropertyValue('--base-color')).toBe('red');
    expect(skeleton.style.getPropertyValue('--highlight-color')).toBe('blue');
  });

  it('applies colors passed as props', () => {
    render(<Skeleton containerTestId="skeleton-container" baseColor="red" highlightColor="blue" />);
    const skeleton = getSkeleton();
    expect(skeleton.style.getPropertyValue('--base-color')).toBe('red');
    expect(skeleton.style.getPropertyValue('--highlight-color')).toBe('blue');
  });

  it('lets a prop override one SkeletonTheme color and keeps the other', () => {
    render(
      <SkeletonTheme baseColor="red" highlightColor="blue">
        <Skeleton containerTestId="skeleton-container" baseColor="green" />
      </SkeletonTheme>,
    );
    const skeleton = getSkeleton();
    expect(skeleton.style.getPropertyValue('--base-color')).toBe('green');
    expect(skeleton.style.getPropertyValue('--highlight-color')).toBe('blue');
  });

  it('updates and removes color overrides on rerender', () => {
    const { rerender } = render(<Skeleton containerTestId="skeleton-container" baseColor="red" />);
    rerender(<Skeleton containerTestId="skeleton-container" baseColor="green" />);
    expect(getSkeleton().style.getPropertyValue('--base-color')).toBe('green');
    rerender(<Skeleton containerTestId="skeleton-container" />);
    expect(getSkeleton().style.getPropertyValue('--base-color')).toBe('');
  });
});
