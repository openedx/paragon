const fs = require('fs');
const path = require('path');

const migrateToOpenEdxScopeCommand = require('../migrate-to-openedx-scope');

jest.mock('fs');
jest.mock('path');

describe('migrateToOpenEdxScopeCommand', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    process.argv = ['node', 'script', 'command', '/mock/project/path'];

    path.resolve.mockReturnValue('/mock/project/path');
    path.join.mockImplementation((...args) => args.join('/'));
    path.basename.mockImplementation((filePath) => filePath.split('/').pop());
  });

  it('should process valid files and replace @edx/paragon with @openedx/paragon', () => {
    const mockFiles = {
      '/mock/project/path': ['file1.js', 'file2.tsx', '.git', 'node_modules', 'src'],
      '/mock/project/path/src': ['component.jsx'],
    };

    const mockFileContents = {
      '/mock/project/path/file1.js': 'import { Button } from "@edx/paragon";',
      '/mock/project/path/file2.tsx': 'import { Modal } from "@edx/paragon/modal";',
      '/mock/project/path/src/component.jsx': 'require("@edx/paragon")',
    };

    fs.readdirSync.mockImplementation((dir) => mockFiles[dir] || []);
    fs.statSync.mockImplementation((filePath) => ({
      isDirectory: () => !filePath.includes('.'),
    }));
    fs.readFileSync.mockImplementation((filePath) => mockFileContents[filePath] || '');
    fs.writeFileSync.mockImplementation(() => {});

    migrateToOpenEdxScopeCommand();

    expect(fs.writeFileSync).toHaveBeenCalledTimes(3);
    expect(fs.writeFileSync).toHaveBeenCalledWith(
      '/mock/project/path/file1.js',
      'import { Button } from "@openedx/paragon";',
      'utf-8',
    );
    expect(fs.writeFileSync).toHaveBeenCalledWith(
      '/mock/project/path/file2.tsx',
      'import { Modal } from "@openedx/paragon/modal";',
      'utf-8',
    );
    expect(fs.writeFileSync).toHaveBeenCalledWith(
      '/mock/project/path/src/component.jsx',
      'require("@openedx/paragon")',
      'utf-8',
    );
  });

  it('should skip invalid file extensions', () => {
    const mockFiles = {
      '/mock/project/path': ['file1.txt', 'file2.json'],
    };

    fs.readdirSync.mockImplementation((dir) => mockFiles[dir] || []);
    fs.statSync.mockImplementation(() => ({
      isDirectory: () => false,
    }));
    fs.readFileSync.mockImplementation(() => 'import "@edx/paragon"');

    migrateToOpenEdxScopeCommand();

    expect(fs.writeFileSync).not.toHaveBeenCalled();
  });

  it('should skip node_modules directory', () => {
    const mockFiles = {
      '/mock/project/path': ['node_modules'],
      '/mock/project/path/node_modules': ['some-package'],
    };

    fs.readdirSync.mockImplementation((dir) => mockFiles[dir] || []);
    fs.statSync.mockImplementation(() => ({
      isDirectory: () => true,
    }));

    migrateToOpenEdxScopeCommand();

    expect(fs.readdirSync).not.toHaveBeenCalledWith('/mock/project/path/node_modules');
  });

  it('should skip hidden directories except . and ..', () => {
    const mockFiles = {
      '/mock/project/path': ['.git', '.', '..', '.hidden'],
    };

    fs.readdirSync.mockImplementation((dir) => mockFiles[dir] || []);
    fs.statSync.mockImplementation(() => ({
      isDirectory: () => true,
    }));

    migrateToOpenEdxScopeCommand();

    expect(fs.readdirSync).not.toHaveBeenCalledWith('/mock/project/path/.git');
    expect(fs.readdirSync).not.toHaveBeenCalledWith('/mock/project/path/.hidden');
  });
});
