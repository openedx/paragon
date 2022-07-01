import { getTypesString, isMultipleTypes, formatBytes } from '../utils';

const MB = 1048576;
const GB = 1048576 * 1024;

describe('utils', () => {
  describe('isMultipleTypes', () => {
    it('returns false if accept object is empty', () => {
      const isMultiple = isMultipleTypes({});
      expect(isMultiple).toEqual(false);
    });
    it('returns false if only one MIME type specified without file extensions', () => {
      const isMultiple = isMultipleTypes({ 'image/*': [] });
      expect(isMultiple).toEqual(false);
    });
    it('returns false if only one MIME type specified with one file extensions', () => {
      const isMultiple = isMultipleTypes({ 'image/*': ['.png'] });
      expect(isMultiple).toEqual(false);
    });
    it('returns true if two MIME types specified without file extensions', () => {
      const isMultiple = isMultipleTypes({ 'image/*': [], 'video/*': [] });
      expect(isMultiple).toEqual(true);
    });
    it('returns true if two MIME types specified with file extensions', () => {
      const isMultiple = isMultipleTypes({ 'image/*': ['.png'], 'video/*': ['.mp4'] });
      expect(isMultiple).toEqual(true);
    });
    it('returns true if one MIME type specified with two file extensions', () => {
      const isMultiple = isMultipleTypes({ 'image/*': ['.png', 'jpg'] });
      expect(isMultiple).toEqual(true);
    });
  });

  describe('getTypesString', () => {
    it('returns empty string if accept object is empty', () => {
      const fileTypes = getTypesString({});
      expect(fileTypes).toEqual('');
    });
    it('correctly handles one MIME type without file extensions', () => {
      const fileTypes = getTypesString({ 'image/*': [] });
      expect(fileTypes).toEqual('image');
    });
    it('correctly handles one MIME type without wildcard', () => {
      const fileTypes = getTypesString({ 'image/png': [] });
      expect(fileTypes).toEqual('PNG');
    });
    it('correctly handles two MIME types without file extensions', () => {
      const fileTypes = getTypesString({ 'image/*': [], 'video/*': [] });
      expect(fileTypes).toEqual('image, video');
    });
    it('correctly handles one MIME type with file extensions', () => {
      const fileTypes = getTypesString({ 'image/*': ['.png', '.jpg'] });
      expect(fileTypes).toEqual('PNG, JPG');
    });
    it('correctly handles one MIME type with file extensions', () => {
      const fileTypes = getTypesString({ 'image/*': ['.png', '.jpg'], 'video/*': ['.mp4', '.mov'] });
      expect(fileTypes).toEqual('PNG, JPG, MP4, MOV');
    });
  });

  describe('formatBytes', () => {
    it('returns "0 bytes" if received 0', () => {
      const formattedText = formatBytes(0);
      expect(formattedText).toEqual('0 Bytes');
    });
    it('correctly processes 5 megabytes', () => {
      const formattedText = formatBytes(5 * MB);
      expect(formattedText).toEqual('5MB');
    });
    it('correctly processes 5 gigabytes', () => {
      const formattedText = formatBytes(5 * GB);
      expect(formattedText).toEqual('5GB');
    });
    it('correctly handles decimals', () => {
      const formattedText = formatBytes(5.5 * GB);
      expect(formattedText).toEqual('5.5GB');
    });
  });
});
