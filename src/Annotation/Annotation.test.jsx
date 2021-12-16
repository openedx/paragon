import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Annotation from './index';

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
      const wrapper = mount(<Annotation variant={variant} arrowPlacement={arrowPlacement}>Test text</Annotation>);
      const annotation = wrapper.find('.pgn__annotation');
      expect(annotation.hasClass(expectedClassName)).toEqual(true);
    },
  );
});
