/* eslint-disable import/no-extraneous-dependencies */
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

(window as any).crypto = {
  getRandomValues: (arr: any) => crypto.randomBytes(arr.length),
};
