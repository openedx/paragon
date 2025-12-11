import { afterEach, snapshot } from 'node:test';
import { basename, dirname } from 'node:path';
import { format as prettyFormat, plugins as formatPlugins } from 'pretty-format';
import { cleanup } from '@testing-library/react';

/** Set snapshot filenames for backwards compatibility with Jest */
snapshot.setResolveSnapshotPath((path) => (path ? `${dirname(path)}/__snapshots__/${basename(path)}.snap` : ''));

/** Serialized deprecated 'react-test-renderer' trees as HTML strings */
snapshot.setDefaultSnapshotSerializers([
  (value) => {
    if (typeof value === 'object' && ['type', 'props', 'children'].every(k => k in value)) {
      // This is the output of react-test-render's render().toJSON() method. Serialize it as HTML.
      return prettyFormat(value, {
        plugins: [formatPlugins.ReactTestComponent],
        printFunctionName: false,
      });
    }
    return JSON.stringify(value, null, 2);
  },
]);

afterEach(() => {
  // Unmount all react components after each test.
  // Otherwise each call to render() just adds new ones to the same DOM and the tests conflict.
  cleanup();
});

// Mock ResizeObserver since JSDom doesn't provide it:
class ResizeObserver {
  observe() {
    // do nothing
  }

  unobserve() {
    // do nothing
  }

  disconnect() {
    // do nothing
  }
}

window.ResizeObserver = ResizeObserver;
