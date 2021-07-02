import newId from './newId';

describe('newId', () => {
  it('increments on each call', () => {
    expect(newId()).toEqual('id1');
    expect(newId('foo-')).toEqual('foo-2');
    expect(newId('bar-')).toEqual('bar-3');
  });
});
