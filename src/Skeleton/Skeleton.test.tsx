import { render, screen } from '@testing-library/react';

import Skeleton, { SkeletonTheme } from '.';

describe('<Skeleton />', () => {
  it('renders the requested number of skeleton lines', () => {
    render(<Skeleton count={3} containerTestId="skeleton" />);
    const container = screen.getByTestId('skeleton');
    expect(container.querySelectorAll('.react-loading-skeleton')).toHaveLength(3);
  });

  it('passes props through to the skeleton elements', () => {
    render(<Skeleton containerTestId="skeleton" className="custom-class" circle width={50} height={50} />);
    const element = screen.getByTestId('skeleton').querySelector('.react-loading-skeleton') as HTMLElement;
    expect(element).toHaveClass('custom-class');
    expect(element.style.borderRadius).toBe('50%');
    expect(element.style.width).toBe('50px');
    expect(element.style.height).toBe('50px');
  });

  it('applies style options from a parent <SkeletonTheme>', () => {
    render(
      <SkeletonTheme baseColor="red" highlightColor="blue" duration={5}>
        <Skeleton containerTestId="skeleton" />
      </SkeletonTheme>,
    );
    const element = screen.getByTestId('skeleton').querySelector('.react-loading-skeleton') as HTMLElement;
    expect(element.style.getPropertyValue('--base-color')).toBe('red');
    expect(element.style.getPropertyValue('--highlight-color')).toBe('blue');
    expect(element.style.getPropertyValue('--animation-duration')).toBe('5s');
  });

  it('lets its own props override the theme', () => {
    render(
      <SkeletonTheme baseColor="red">
        <Skeleton containerTestId="skeleton" baseColor="green" />
      </SkeletonTheme>,
    );
    const element = screen.getByTestId('skeleton').querySelector('.react-loading-skeleton') as HTMLElement;
    expect(element.style.getPropertyValue('--base-color')).toBe('green');
  });
});
