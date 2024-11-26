import { constructChildren, cropText, truncateLines } from './utils';

const createElementMock = {
  parentNode: {
    removeChild: () => {},
  },
  scrollHeight: 2000,
  setAttribute: () => {},
  append: () => {},
  appendChild() {
    this.scrollHeight -= 600;
  },
};

describe('utils', () => {
  describe('cropText', () => {
    it('return the contents of the sliced text', () => {
      const text = 'Learners, course teams, researchers, developers';
      const cropDecrement = 0.70;
      const croppedText = cropText(text, cropDecrement);
      expect(croppedText).toEqual('Learners, course teams, research');
    });
  });

  describe('constructChildren', () => {
    it('return new string text after constructed', () => {
      const string = 'Learners, course teams, researchers, developers';
      const whiteSpace = true;
      const ellipsis = '...';
      const finalString = constructChildren(string, whiteSpace, ellipsis);
      expect(finalString[0].textContent).toEqual('Learners, course teams, researchers, developers ...');
    });
    it('return new string text after constructed', () => {
      const string = 'Learners, course teams, researchers, developers';
      const whiteSpace = true;
      const ellipsis = '...';
      const childrenData = [
        {
          type: null, props: undefined, start: 0, end: 10,
        },
        {
          type: 'a', props: { href: 'https://test.com', children: 'test' }, start: 10, end: 47,
        },
      ];
      const finalString = constructChildren(string, whiteSpace, ellipsis, childrenData);
      expect(finalString.length).toEqual(3);
    });
  });

  describe('truncateLines', () => {
    it('returned truncate lines', () => {
      const element = document.createElement('div');
      jest.spyOn(document, 'createElement').mockReturnValue(createElementMock);

      const text = 'Learners, course teams, researchers, developers: the edX community includes groups with '
        + 'a range of reasons for using the platform and objectives to accomplish. Learners, course teams,'
        + ' researchers, developers.';
      const lines = 1;
      const whiteSpace = false;
      const ellipsis = '___';
      expect(truncateLines(text, element, {
        lines,
        whiteSpace,
        ellipsis,
      })[0][0].textContent).toEqual('Learners, course teams, researchers, developers: the edX community'
        + ' includes groups with a range of reasons for using the platform and objectives to accomplish.'
        + ' Learners, course teams, researchers, develope___');
    });
    it('truncate text with inner tags', () => {
      const element = document.createElement('div');
      jest.spyOn(document, 'createElement').mockReturnValue(createElementMock);

      const text = [
        { type: 'a', props: { children: 'Learners', href: '#' } },
        ' course teams, researchers, developers: the edX community includes groups with',
        {
          type: 'strong',
          props: { children: ' a range of reasons for using the platform and objectives to accomplish.' },
        },
      ];
      const lines = 2;
      const whiteSpace = false;
      const ellipsis = '___';
      expect(truncateLines(text, element, {
        lines,
        whiteSpace,
        ellipsis,
      })[0].length).toEqual(3);
    });
    it('truncate text with nested inner tags', () => {
      const element = document.createElement('div');
      jest.spyOn(document, 'createElement').mockReturnValue(createElementMock);

      const text = [
        { type: 'a', props: { children: 'Learners', href: '#' } },
        ' course teams, researchers, developers: the edX community includes groups with',
        {
          type: 'strong',
          props: { children: ' a range of reasons for using the platform and objectives to accomplish.' },
        },
        {
          type: 'a',
          props: {
            children: [
              { type: 'a', props: { children: 'Learners', href: '#' } },
              ' course teams, researchers, developers: the edX community includes groups with',
              {
                type: 'strong',
                props: { children: ' a range of reasons for using the platform and objectives to accomplish.' },
              },
              { type: 'a', props: { children: 'Learners', href: '#' } },
            ],
            href: '#',
          },
        },
        { type: 'a', props: { children: '', href: '#' } },
      ];
      const lines = 2;
      const whiteSpace = false;
      const ellipsis = '___';
      expect(truncateLines(text, element, {
        lines,
        whiteSpace,
        ellipsis,
      })[0].length).toEqual(4);
    });
  });
});
