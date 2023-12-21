import { toastEmitter } from '../EventEmitter';

describe('EventEmitter', () => {
  test('subscribes and emits an event', () => {
    const mockCallback = jest.fn();
    toastEmitter.subscribe('testEvent', mockCallback);

    toastEmitter.emit('testEvent', 'testData');
    expect(mockCallback).toHaveBeenCalledWith('testData');
  });

  test('emits an event with data', () => {
    const mockCallback = jest.fn();
    toastEmitter.subscribe('testEvent', mockCallback);

    const testData = { key: 'value' };
    toastEmitter.emit('testEvent', testData);
    expect(mockCallback).toHaveBeenCalledWith(testData);
  });

  test('handles multiple subscriptions to the same event', () => {
    const mockCallback1 = jest.fn();
    const mockCallback2 = jest.fn();

    toastEmitter.subscribe('testEvent', mockCallback1);
    toastEmitter.subscribe('testEvent', mockCallback2);

    toastEmitter.emit('testEvent');
    expect(mockCallback1).toHaveBeenCalled();
    expect(mockCallback2).toHaveBeenCalled();
  });

  test('emits an event with no subscribers', () => {
    const mockCallback = jest.fn();

    toastEmitter.emit('testEvent');
    expect(mockCallback).not.toHaveBeenCalled();
  });

  test('handles multiple different events', () => {
    const mockCallback1 = jest.fn();
    const mockCallback2 = jest.fn();

    toastEmitter.subscribe('testEvent1', mockCallback1);
    toastEmitter.subscribe('testEvent2', mockCallback2);

    toastEmitter.emit('testEvent1');
    expect(mockCallback1).toHaveBeenCalled();
    expect(mockCallback2).not.toHaveBeenCalled();
  });

  test('emits an undefined event', () => {
    const mockCallback = jest.fn();
    toastEmitter.subscribe('testEvent', mockCallback);

    toastEmitter.emit('undefinedEvent');
    expect(mockCallback).not.toHaveBeenCalled();
  });
});
