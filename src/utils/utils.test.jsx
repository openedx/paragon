import React from 'react';

import newId from './newId';
import getTextFromElement from './getTextFromElement';

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
