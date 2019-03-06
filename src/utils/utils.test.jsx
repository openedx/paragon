import React from 'react';

import newId from './newId';
import getTextFromElement from './getTextFromElement';

describe('newId', () => {
  it('produces a new id on each call', () => {
    const generatedIds = [];
    const range = [...Array(10).keys()];

    range.forEach(() => generatedIds.push(newId()));

    // Verify that all of the generated ids are unique
    expect(new Set(generatedIds).size === generatedIds.length).toBe(true);
  });
});

describe('getTextFromElement', () => {
  it('should return text from element', () => {
    const element = (
      <div>
        <h1>Foo</h1>
        <span>bar</span>
      </div>
    );
    expect(getTextFromElement(element)).toEqual('Foobar');
  });
});
