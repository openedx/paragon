const axios = require('axios');

const { sendTrackInfo, capitalize } = require('../utils');

jest.mock('axios');

describe('utils', () => {
  describe('sendTrackInfo', () => {
    const originalEnv = process.env;

    beforeEach(() => {
      jest.clearAllMocks();
      process.env = { ...originalEnv };
    });

    afterAll(() => {
      process.env = originalEnv;
    });

    it('should send tracking data when TRACK_ANONYMOUS_ANALYTICS is true', async () => {
      process.env.TRACK_ANONYMOUS_ANALYTICS = 'true';
      process.env.BASE_URL = 'http://test.com';
      const mockResponse = { status: 200 };
      axios.post.mockResolvedValue(mockResponse);

      const eventId = 'test_event';
      const properties = { prop1: 'value1' };
      await sendTrackInfo(eventId, properties);

      expect(axios.post).toHaveBeenCalledWith(
        'http://test.com/.netlify/functions/sendTrackData',
        { eventId, properties },
      );
    });

    it('should not send tracking data when TRACK_ANONYMOUS_ANALYTICS is false', async () => {
      process.env.TRACK_ANONYMOUS_ANALYTICS = '';

      await sendTrackInfo('test_event', {});

      expect(axios.post).not.toHaveBeenCalled();
    });

    it('should handle errors gracefully', async () => {
      process.env.TRACK_ANONYMOUS_ANALYTICS = 'true';
      process.env.BASE_URL = 'http://test.com';
      const error = new Error('Network error');
      axios.post.mockRejectedValue(error);

      const consoleSpy = jest.spyOn(console, 'log');

      await sendTrackInfo('test_event', {});

      // Wait for the next tick to allow promise rejection to be handled
      await new Promise(process.nextTick);

      expect(consoleSpy).toHaveBeenCalledWith('Track info request failed (Error: Network error)');
      consoleSpy.mockRestore();
    });
  });

  describe('capitalize', () => {
    it('should capitalize the first letter of a string', () => {
      expect(capitalize('hello')).toBe('Hello');
      expect(capitalize('world')).toBe('World');
    });

    it('should return empty string for empty input', () => {
      expect(capitalize('')).toBe('');
    });

    it('should return empty string for non-string input', () => {
      expect(capitalize(null)).toBe('');
      expect(capitalize(undefined)).toBe('');
      expect(capitalize(123)).toBe('');
      expect(capitalize({})).toBe('');
    });

    it('should handle single character strings', () => {
      expect(capitalize('a')).toBe('A');
    });

    it('should not modify already capitalized strings', () => {
      expect(capitalize('Hello')).toBe('Hello');
    });
  });
});
