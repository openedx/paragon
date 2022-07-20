import {
  constructString,
  createTextClamp,
  createCopyElement,
  clampLines,
  calcLineHeightRightOffset,
  calcEllipsisElementHeight,
} from './utils';

describe('utils', () => {
  describe('createTextClamp', () => {
    it('return the contents of the sliced text', () => {
      const text = 'Learners, course teams, researchers, developers';
      const decrement = 0.70;
      const textClump = createTextClamp(text, decrement);
      expect(textClump).toEqual('Learners, course teams, research');
    });
  });

  describe('constructString', () => {
    it('return new string text after constructed', () => {
      const string = 'Learners, course teams, researchers, developers';
      const whiteSpace = true;
      const ellipsis = '...';
      const finalString = constructString(string, whiteSpace, ellipsis);
      expect(finalString).toEqual('Learners, course teams, researchers, developers ...');
    });
  });

  describe('createCopyElement', () => {
    it('returned element isn`t undefined', () => {
      const sourceElement = document.createElement('span');
      const sourceElementStyles = { color: 'red' };
      expect(createCopyElement(sourceElement, sourceElementStyles)).not.toBeUndefined();
    });
    it('returned copy element', () => {
      const sourceElement = document.createElement('span');
      const sourceElementStyles = { color: 'red' };
      const element = createCopyElement(sourceElement, sourceElementStyles);
      const mockElement = '<span style="visibility: visible; color: red;" />';
      const finalElement = new DOMParser().parseFromString(mockElement, 'text/html').getElementsByTagName('span')[0];
      expect(element).toEqual(finalElement);
    });
  });

  describe('clampLines', () => {
    it('returned string isn`t undefined', () => {
      const text = 'Lorem Ipsum is simply dummy text';
      const element = document.createElement('span');
      const lines = 2;
      const whiteSpace = false;
      const ellipsis = '...';
      expect(clampLines(text, element, { lines, whiteSpace, ellipsis })).not.toBeUndefined();
    });
  });

  describe('calcLineHeightRightOffset', () => {
    it('returned offset value', () => {
      const maxHeight = 1500;
      const ellipsisElementHeight = 1500;
      expect(calcLineHeightRightOffset(maxHeight, ellipsisElementHeight)).toEqual(2);
    });
  });

  describe('calcEllipsisElementHeight', () => {
    it('returned value isn`t undefined', () => {
      const ellipsisElement = document.createElement('div');
      expect(calcEllipsisElementHeight(ellipsisElement)).not.toBeUndefined();
    });
  });
});
