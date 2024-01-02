import { toastEmitter } from './EventEmitter';
/**
 * Represents an action for a toast notification.
 *
 * @typedef {Object} ToastAction
 * @property {string} [href] - If present, the action is rendered as an anchor tag (`<a>`).
 * @property {Function} [onClick] - The function to call when the action is clicked.
 * @property {string} label - The text label for the action.
 */

/**
 * Displays a toast notification.
 *
 * @param {string} message - The message to be displayed in the toast.
 * @param {number} duration - The duration for which the toast should be visible.
 * @param {ToastAction[]} actions - An array of action objects for the toast.
 * @param {string} position - The position where the toast will be displayed.
*/

// eslint-disable-next-line import/prefer-default-export
export const toast = ({
  message, duration, actions, position,
}) => {
  toastEmitter.emit('showToast', {
    message, duration, actions, position,
  });
};
