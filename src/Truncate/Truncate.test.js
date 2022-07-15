import { constructString, createTextClamp } from './utils';

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
});
