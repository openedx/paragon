import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Annotation from '.';

const VARIANTS = ['error', 'success', 'warning', 'light', 'dark'];
const ARROW_PLACEMENTS = ['top', 'right', 'bottom', 'left'];

describe('Annotation', () => {
  it('renders in all variants', () => {
    const tree = renderer.create((
      <>
        {VARIANTS.map((variant) => ARROW_PLACEMENTS.map(position => (
          <Annotation
            key={`${variant}-${position}`}
            arrowPlacement={position}
            variant={variant}
          >
            Annotation text
          </Annotation>
        )))}
      </>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });

  const classNameTestData = [];
  VARIANTS.forEach((variant) => {
    ARROW_PLACEMENTS.forEach((arrowPlacement) => {
      classNameTestData.push([variant, arrowPlacement, `pgn__annotation-${variant}-${arrowPlacement}`]);
    });
  });

  test.each(classNameTestData)(
    'renders with correct className for variant: %s, with arrow placement: %s',
    (variant, arrowPlacement, expectedClassName) => {
      render(
        <Annotation
          variant={variant}
          arrowPlacement={arrowPlacement}
          data-testid="annotation"
        >
          Test text
        </Annotation>,
      );
      const annotation = screen.getByTestId('annotation');
      expect(annotation.className).toContain(expectedClassName);
    },
  );
});
