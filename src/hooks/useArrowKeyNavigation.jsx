import { useRef, useEffect } from 'react';

/**
 * A React hook to enable arrow key navigation on a component.
 */

function handleEnter({ event, currentIndex, activeElement }) {
  if (currentIndex === -1) { return; }
  activeElement.click();
  event.preventDefault();
}

function handleArrowKey({ event, currentIndex, availableElements }) {
  // If the focus isn't in the container, focus on the first thing
  if (currentIndex === -1) { availableElements[0].focus(); }

  // Move the focus up or down. Wrap around ends of list.
  let nextElement;

  if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
    nextElement = availableElements[(currentIndex + 1) % availableElements.length];
  }
  if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
    nextElement = currentIndex - 1 < 0
      ? availableElements[currentIndex - 1 + availableElements.length]
      : availableElements[currentIndex - 1];
  }
  if (event.key === 'End') {
    nextElement = availableElements[availableElements.length - 1];
  }
  if (event.key === 'Home') {
    [nextElement] = availableElements;
  }

  // eslint-disable-next-line no-unused-expressions
  nextElement && nextElement.focus();
  event.preventDefault();
}

/**
 * Implement arrow key navigation for the given parentNode
 */
function handleEvents({
  event,
  ignoredKeys = [],
  parentNode,
  selectors = 'a,button,input',
}) {
  if (!parentNode) { return; }

  const { key } = event;

  if (!['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft', 'Enter', 'Home', 'End'].includes(key)
      || ignoredKeys.includes(key)) {
    return;
  }

  const { activeElement } = document;

  // If we're not inside the container, don't do anything
  if (!parentNode.contains(activeElement)) { return; }

  // Get the list of elements we're allowed to scroll through
  const availableElements = parentNode.querySelectorAll(selectors);

  // No elements are available to loop through.
  if (!availableElements.length) { return; }

  // Which index is currently selected
  const currentIndex = Array.from(availableElements).findIndex(
    (availableElement) => availableElement === activeElement,
  );

  if (key === 'Enter') {
    handleEnter({ event, currentIndex, activeElement });
  }
  handleArrowKey({ event, currentIndex, availableElements });
}

export default function useArrowKeyNavigation(props) {
  const { selectors, ignoredKeys } = props || {};
  const parentNode = useRef();

  useEffect(() => {
    const eventHandler = (event) => {
      handleEvents({
        event, ignoredKeys, parentNode: parentNode.current, selectors,
      });
    };

    document.addEventListener('keydown', eventHandler);

    return () => document.removeEventListener('keydown', eventHandler);
  }, [ignoredKeys, selectors]);

  return parentNode;
}
