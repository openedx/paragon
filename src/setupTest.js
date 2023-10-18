import 'regenerator-runtime/runtime';

import '@testing-library/jest-dom';

const crypto = require('crypto');

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

window.crypto = {
  getRandomValues: arr => crypto.randomBytes(arr.length),
};
