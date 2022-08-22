import { constructString, cropText, truncateLines } from './utils';

describe('utils', () => {
  describe('cropText', () => {
    it('return the contents of the sliced text', () => {
      const text = 'Learners, course teams, researchers, developers';
      const cropDecrement = 0.70;
      const croppedText = cropText(text, cropDecrement);
      expect(croppedText).toEqual('Learners, course teams, research');
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

  describe('truncateLines', () => {
    it('returned truncate lines', () => {
      const element = document.createElement('div');
      jest.spyOn(document, 'createElement').mockReturnValue({
        parentNode: {
          removeChild: () => {},
        },
        scrollHeight: 220,
        setAttribute: () => {},
        set innerHTML(val) {
          this.scrollHeight -= 60;
        },
      });

      const text = 'Learners, course teams, researchers, developers: the edX community includes groups with '
        + 'a range of reasons for using the platform and objectives to accomplish.';
      const lines = 2;
      const whiteSpace = false;
      const ellipsis = '___';
      expect(truncateLines(text, element, {
        lines,
        whiteSpace,
        ellipsis,
      })).toEqual('Learners, course teams, researchers, developers: the edX community includes groups with a range of '
        + 'reasons for using the platform and objectives to accompl___');
    });
  });
});
