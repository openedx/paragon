const http = require('http');
const fs = require('fs');

const serveThemeCssCommand = require('../serve-theme-css');

jest.mock('fs');
jest.mock('http');
jest.mock('ora', () => jest.fn(() => ({
  start: jest.fn().mockReturnThis(),
  succeed: jest.fn().mockReturnThis(),
  fail: jest.fn().mockReturnThis(),
})));

describe('serveThemeCssCommand', () => {
  let mockServer;
  let mockListen;
  let mockClose;

  beforeEach(() => {
    jest.clearAllMocks();

    mockListen = jest.fn();
    mockClose = jest.fn((callback) => {
      if (callback) {
        callback();
      }
    });
    mockServer = {
      listen: mockListen,
      on: jest.fn(),
      close: mockClose,
    };

    http.createServer.mockReturnValue(mockServer);
    fs.existsSync.mockReturnValue(true);
    fs.statSync.mockReturnValue({
      isDirectory: () => false,
      size: 1024,
      mtime: { getTime: () => 1234567890 },
    });
    fs.readFileSync.mockReturnValue(JSON.stringify({
      themeUrls: {
        core: {
          paths: {
            default: './core.css',
            minified: './core.min.css',
          },
        },
        defaults: {
          light: 'light',
        },
        variants: {
          light: {
            paths: {
              default: './light.css',
              minified: './light.min.css',
            },
          },
        },
      },
    }));
  });

  it('should start server with default arguments', async () => {
    const args = [];

    await serveThemeCssCommand(args);

    expect(http.createServer).toHaveBeenCalled();
    expect(mockListen).toHaveBeenCalledWith(3000, 'localhost', expect.any(Function));
  });

  it('should start server with custom arguments', async () => {
    const args = [
      '--build-dir=./custom-dist',
      '--port=8080',
      '--host=0.0.0.0',
    ];

    await serveThemeCssCommand(args);

    expect(mockListen).toHaveBeenCalledWith(8080, '0.0.0.0', expect.any(Function));
  });

  it('should exit if build directory does not exist', async () => {
    const args = ['--build-dir=./nonexistent'];
    fs.existsSync.mockReturnValue(false);

    const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
    const mockConsoleError = jest.spyOn(console, 'error').mockImplementation(() => {});

    await serveThemeCssCommand(args);

    expect(mockConsoleError).toHaveBeenCalledWith(
      expect.stringContaining('Error: Build directory'),
    );
    expect(mockExit).toHaveBeenCalledWith(1);

    mockExit.mockRestore();
    mockConsoleError.mockRestore();
  });

  it('should exit if theme-urls.json does not exist', async () => {
    const args = ['--build-dir=./dist'];
    // Mock that dist exists but theme-urls.json doesn't
    fs.existsSync.mockImplementation((path) => !path.endsWith('theme-urls.json'));

    const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
    const mockConsoleError = jest.spyOn(console, 'error').mockImplementation(() => {});

    await serveThemeCssCommand(args);

    // The actual implementation calls console.error twice with separate messages
    expect(mockConsoleError).toHaveBeenNthCalledWith(
      1,
      expect.stringContaining('Error:'),
    );
    expect(mockConsoleError).toHaveBeenNthCalledWith(
      1,
      expect.stringContaining('does not appear to be a valid Paragon dist directory'),
    );
    expect(mockConsoleError).toHaveBeenNthCalledWith(
      2,
      expect.stringContaining('Missing theme-urls.json file'),
    );
    expect(mockExit).toHaveBeenCalledWith(1);

    mockExit.mockRestore();
    mockConsoleError.mockRestore();
  });

  it('should exit if theme-urls.json is invalid JSON', async () => {
    const args = ['--build-dir=./dist'];
    fs.readFileSync.mockReturnValue('invalid json');

    const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
    const mockConsoleError = jest.spyOn(console, 'error').mockImplementation(() => {});

    await serveThemeCssCommand(args);

    expect(mockConsoleError).toHaveBeenCalledWith(
      expect.stringContaining('Error: Could not read theme-urls.json file.'),
    );
    expect(mockExit).toHaveBeenCalledWith(1);

    mockExit.mockRestore();
    mockConsoleError.mockRestore();
  });

  it('should handle server errors', async () => {
    const args = ['--port=3000'];
    const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
    const mockConsoleError = jest.spyOn(console, 'error').mockImplementation(() => {});

    await serveThemeCssCommand(args);

    // Simulate server error
    const errorCallback = mockServer.on.mock.calls.find(call => call[0] === 'error')[1];
    errorCallback({ code: 'EADDRINUSE' });

    expect(mockConsoleError).toHaveBeenCalledWith(
      expect.stringContaining('Error: Port 3000 is already in use.'),
    );
    expect(mockExit).toHaveBeenCalledWith(1);

    mockExit.mockRestore();
    mockConsoleError.mockRestore();
  });

  it('should handle graceful shutdown', async () => {
    const args = [];
    const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
    const mockConsoleLog = jest.spyOn(console, 'log').mockImplementation(() => {});

    await serveThemeCssCommand(args);

    // Simulate SIGINT
    const sigintCallback = process.listeners('SIGINT').pop();
    sigintCallback();

    expect(mockConsoleLog).toHaveBeenCalledWith(
      expect.stringContaining('Shutting down server...'),
    );
    expect(mockClose).toHaveBeenCalled();
    expect(mockExit).toHaveBeenCalledWith(0);

    mockExit.mockRestore();
    mockConsoleLog.mockRestore();
  });

  it('should parse command line arguments correctly', async () => {
    const args = [
      '-b', './custom-dist',
      '-p', '8080',
      '-h', '0.0.0.0',
      '--cors=false',
    ];

    await serveThemeCssCommand(args);

    expect(mockListen).toHaveBeenCalledWith(8080, '0.0.0.0', expect.any(Function));
  });

  it('should handle docs-url argument', async () => {
    const args = [
      '--docs-url=https://custom-docs.example.com',
      '--theme-name=Custom Theme',
    ];

    await serveThemeCssCommand(args);

    expect(http.createServer).toHaveBeenCalled();
    expect(mockListen).toHaveBeenCalledWith(3000, 'localhost', expect.any(Function));
  });

  it('should use default docs URL when not specified', async () => {
    const args = [];

    await serveThemeCssCommand(args);

    expect(http.createServer).toHaveBeenCalled();
    expect(mockListen).toHaveBeenCalledWith(3000, 'localhost', expect.any(Function));
  });
});
