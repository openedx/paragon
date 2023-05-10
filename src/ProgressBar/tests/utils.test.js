import { placeInfoAtZero } from '../utils';
import { ANNOTATION_CLASS } from '..';

const ref = {
  current: {
    style: {
      marginLeft: '',
    },
    children: [
      {
        className: `${ANNOTATION_CLASS} someClass`,
        getBoundingClientRect: () => ({
          width: 24.58123,
        }),
      },
      {
        className: 'anotherClass',
        getBoundingClientRect: () => ({
          width: 55.96844,
        }),
      },
    ],
  },
};

describe('utils', () => {
  describe('placeInfoAtZero', () => {
    it('changes left margin of the ref.current.style', () => {
      const previousValue = ref.current.style.marginLeft;
      placeInfoAtZero(ref);
      const changedValue = ref.current.style.marginLeft;
      expect(previousValue).not.toEqual(changedValue);
    });
    it('correctly calculates left margin when ref is passed', () => {
      placeInfoAtZero(ref);

      const { children } = ref.current;
      let marginLeft = 0.0;
      for (let i = 0; i < children.length || 0; i++) {
        const elementParams = children[i].getBoundingClientRect();
        if (children[i].className.includes(ANNOTATION_CLASS)) {
          marginLeft += elementParams.width / 2;
        } else {
          marginLeft += 0;
        }
      }
      const expectedMarginLeft = `${-marginLeft}px`;
      const actualMarginLeft = ref.current.style.marginLeft;

      expect(actualMarginLeft).toEqual(expectedMarginLeft);
    });
    it('correctly calculates left margin when annotationOnly equals to true', () => {
      placeInfoAtZero(ref, false);

      const { children } = ref.current;
      let marginLeft = 0.0;
      for (let i = 0; i < children.length || 0; i++) {
        const elementParams = children[i].getBoundingClientRect();
        if (children[i].className.includes(ANNOTATION_CLASS)) {
          marginLeft += elementParams.width / 2;
        } else {
          marginLeft += elementParams.width;
        }
      }
      const expectedMarginLeft = `${-marginLeft}px`;
      const actualMarginLeft = ref.current.style.marginLeft;

      expect(actualMarginLeft).toEqual(expectedMarginLeft);
    });
    it('returns false if reference is wrong', () => {
      const wrongRef1 = {};
      const wrongRef2 = { current: {} };
      expect(placeInfoAtZero(wrongRef1)).toEqual(false);
      expect(placeInfoAtZero(wrongRef2)).toEqual(false);
    });
    it('returns true if reference is wrong', () => {
      expect(placeInfoAtZero(ref)).toEqual(true);
    });
  });
});
