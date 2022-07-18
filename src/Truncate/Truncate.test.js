import {
  constructString, createTextClamp, createCopyElement, clampLines,
} from './utils';

describe('utils', () => {
  describe('createTextClamp', () => {
    it('return the contents of the sliced text', () => {
      const text = 'Lorem Ipsum is simply dummy text.';
      const coefficient = 0.65;
      const textClump = createTextClamp(text, coefficient);
      expect(textClump).toEqual('Lorem Ipsum is simply');
    });
  });
  describe('constructString', () => {
    it('return new string text after constructed', () => {
      const string = 'Lorem Ipsum is simply dummy text';
      const whiteSpace = false;
      const ellipsis = '...';
      const finalString = constructString(string, whiteSpace, ellipsis);
      expect(finalString).toEqual('Lorem Ipsum is simply dummy text...');
    });
  });
  describe('createCopyElement', () => {
    it('returned element is not undefined', () => {
      const sourceElement = document.createElement('span');
      const sourceElementStyles = {
        color: 'red',
      };
      expect(createCopyElement(sourceElement, sourceElementStyles)).not.toBeUndefined();
    });
  });
  describe('clampLines', () => {
    it('returned string is not undefined', () => {
      const text = 'Hello world';
      const element = document.createElement('span');
      const lines = 2;
      const whiteSpace = false;
      const ellipsis = '...';
      expect(clampLines(text, element, { lines, whiteSpace, ellipsis })).not.toBeUndefined();
    });
  });
});
