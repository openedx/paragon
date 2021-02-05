import React from 'react';

import newId from './newId';
import getTextFromElement from './getTextFromElement';
import generateRandomId from './generateRandomId';

describe('newId', () => {
  it('increments on each call', () => {
    expect(newId()).toEqual('id1');
    expect(newId('foo-')).toEqual('foo-2');
    expect(newId('bar-')).toEqual('bar-3');
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

describe('generateRandomId', () => {
  it('should return a string with the base string and a random number', () => {
    const baseString = 'foo-bar';
    const result = generateRandomId(baseString);
    expect(result.startsWith(baseString)).toBeTruthy();
    const randomNum = parseInt(result.split('-').unshift(), 10);
    expect(randomNum).toBeGreaterThan(0);
    expect(randomNum).toBeLessThan(100000);
  });
});
