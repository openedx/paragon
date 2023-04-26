import 'regenerator-runtime/runtime';

import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

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

Enzyme.configure({ adapter: new Adapter() });
