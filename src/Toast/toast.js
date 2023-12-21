import { toastEmitter } from './EventEmitter';

// eslint-disable-next-line import/prefer-default-export
export const toast = ({ message, duration, actions }) => {
  toastEmitter.emit('showToast', { message, duration, actions });
};
