import raf from './tempPolyfills';

jest.useFakeTimers();

describe('tempPolyfills', () => {
  it('raf should equal global.requestAnimationFrame', () => { expect(raf).toEqual(global.requestAnimationFrame); });

  describe('callback with setTimeout', () => {
    it('should call setTimeout with callback', () => {
      const foo = () => { console.log('foo'); }; // eslint-disable-line no-console

      raf(foo);
      expect(setTimeout.mock.calls.length).toBe(1);
      expect(setTimeout.mock.calls[0][1]).toBe(0);
      expect(setTimeout.mock.calls[0][0]).toEqual(foo);
    });
  });
});
