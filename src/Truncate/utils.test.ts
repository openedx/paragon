import { assembleStringFromChildrenArray, ElementDataEntry } from './utils';

const mockElement = (type: string, props: Record<string, any>, key: string | null = null) => ({
  type,
  props,
  key,
  $$typeof: Symbol.for('react.element'),
});

describe('utils', () => {
  describe('assembleStringFromChildrenArray', () => {
    it('should correctly assemble a string from a simple array of strings and numbers', () => {
      const inputChildren = ['Hello', 123, ' World!'];
      const elementsData: ElementDataEntry[] = [];

      const result = assembleStringFromChildrenArray(inputChildren, elementsData);

      expect(result).toBe('Hello123 World!');
      expect(elementsData.length).toBe(3);

      expect(elementsData[0].start).toBe(0);
      expect(elementsData[0].end).toBe(5);
      expect(elementsData[0].type).toBeNull();

      expect(elementsData[1].start).toBe(5);
      expect(elementsData[1].end).toBe(8);
      expect(elementsData[1].type).toBeNull();

      expect(elementsData[2].start).toBe(8);
      expect(elementsData[2].end).toBe(15);
      expect(elementsData[2].type).toBeNull();
    });

    it('should handle a single React element with a simple string child', async () => {
      const elementText = 'test-element-text';
      const originalProps = { id: 1, children: elementText };
      const element = mockElement('span', originalProps);
      const elementsData: ElementDataEntry[] = [];
      const result = assembleStringFromChildrenArray([element], elementsData);

      expect(result).toBe(elementText);

      const dataEntry = elementsData[0];

      expect(dataEntry.start).toBe(0);
      expect(dataEntry.end).toBe(elementText.length);
      expect(dataEntry.type).toBe('span');
      expect(dataEntry.props).toEqual(originalProps);
      expect(dataEntry.children).toBeNull(); // No nested array since child was a string
    });

    it('should correctly handle a simple array of mixed strings and elements', () => {
      const element1 = mockElement('a', { children: 'Link' });
      const elementsData: ElementDataEntry[] = [];

      const result = assembleStringFromChildrenArray(['Prefix: ', element1, ' Suffix'], elementsData);

      expect(result).toBe('Prefix: Link Suffix');
      expect(elementsData.length).toBe(3);
    });

    it('should recursively handle nested elements and collect nested data', () => {
      const innerStrong = mockElement('strong', { children: 'Inner' });
      const outerDiv = mockElement('div', { children: ['Outer ', innerStrong] });
      const elementsData: ElementDataEntry[] = [];

      const result = assembleStringFromChildrenArray([outerDiv], elementsData);

      expect(result).toBe('Outer Inner');
      expect(elementsData.length).toBe(1); // Only the outer div is tracked at the top level
    });
  });
});
