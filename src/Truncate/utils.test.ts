import { assembleStringFromChildrenArray } from './utils';
import React from 'react';

const mockElement = (type: string, props: Record<string, any>) => 
  React.createElement(type, props);

describe('utils', () => {
  describe('assembleStringFromChildrenArray', () => {
    
    it('should correctly assemble a string from a simple array of strings and numbers', () => {
      const inputChildren = ['Hello', 123, ' World!'];
      
      const { result, elementsData } = assembleStringFromChildrenArray(inputChildren);

      expect(result).toBe('Hello123 World!');
      expect(elementsData).toHaveLength(3);

      expect(elementsData[0]).toMatchObject({ start: 0, end: 5, type: null });
      expect(elementsData[1]).toMatchObject({ start: 5, end: 8, type: null });
      expect(elementsData[2]).toMatchObject({ start: 8, end: 15, type: null });
    });

    it('should handle a single React element with a simple string child', () => {
      const elementText = 'test-element-text';
      const originalProps = { id: 1, children: elementText };
      const element = mockElement('span', originalProps);
      
      const { result, elementsData } = assembleStringFromChildrenArray([element]);

      expect(result).toBe(elementText);
      expect(elementsData).toHaveLength(1);

      const dataEntry = elementsData[0];
      expect(dataEntry.start).toBe(0);
      expect(dataEntry.end).toBe(elementText.length);
      expect(dataEntry.type).toBe('span');
      // Children is null because the child was a primitive string, not an element
      expect(dataEntry.children).toBeNull();
    });

    it('should correctly handle a simple array of mixed strings and elements', () => {
      const element1 = mockElement('a', { children: 'Link' });

      const { result, elementsData } = assembleStringFromChildrenArray(['Prefix: ', element1, ' Suffix']);

      expect(result).toBe('Prefix: Link Suffix');
      expect(elementsData).toHaveLength(3);
      expect(elementsData[1].type).toBe('a');
    });

    it('should recursively handle nested elements and collect nested data', () => {
      const innerStrong = mockElement('strong', { children: 'Inner' });
      const outerDiv = mockElement('div', { children: ['Outer ', innerStrong] });

      const { result, elementsData } = assembleStringFromChildrenArray([outerDiv]);

      expect(result).toBe('Outer Inner');
      
      expect(elementsData).toHaveLength(1);
      const divData = elementsData[0];
      expect(divData.type).toBe('div');

      expect(divData.children).toHaveLength(2);
      expect(divData.children?.[0].type).toBeNull();
      expect(divData.children?.[1].type).toBe('strong');
      
      expect(divData.children?.[1].start).toBe(6);
      expect(divData.children?.[1].end).toBe(11);
    });
  });
});
