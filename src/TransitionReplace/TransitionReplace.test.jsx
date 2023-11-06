/* eslint-disable no-plusplus, react/prop-types */
import React from 'react';
import { render } from '@testing-library/react';

import { act } from 'react-test-renderer';
import TransitionReplace from '.';

function TestReplacement({ showContentA, ...props }) {
  return (
    <TransitionReplace {...props}>
      {showContentA ? (
        <div key="content-a">A</div>
      ) : (
        <div key="content-b">B</div>
      )}
    </TransitionReplace>
  );
}

describe('TransitionReplace', () => {
  it('should add entering class names for each part of the transition', (done) => {
    let count = 0;
    const onChildEnter = (node) => {
      count++;
      expect(count).toEqual(1);
      expect(node.classList.contains('test-enter')).toEqual(true);
    };
    const onChildEntering = (node) => {
      count++;
      expect(count).toEqual(2);
      expect(node.classList.contains('test-enter-active')).toEqual(true);
    };
    const onChildEntered = (node) => {
      count++;
      expect(count).toEqual(3);
      expect(node.classList.contains('test-enter-done')).toEqual(true);
      done();
    };
    const { rerender } = render(
      <TestReplacement
        showContentA
        enterDuration={10}
        exitDuration={10}
        transitionClassNames="test"
        onChildEnter={onChildEnter}
        onChildEntering={onChildEntering}
        onChildEntered={onChildEntered}
      />,
    );

    // Update props to trigger transition
    rerender(
      <TestReplacement
        showContentA={false}
        enterDuration={10}
        exitDuration={10}
        transitionClassNames="test"
        onChildEnter={onChildEnter}
        onChildEntering={onChildEntering}
        onChildEntered={onChildEntered}
      />,
    );
  });

  it('should add exiting class names for each part of the transition', (done) => {
    let count = 0;
    const onChildExit = (node) => {
      count++;
      expect(count).toEqual(1);
      expect(node.classList.contains('test-exit')).toEqual(true);
    };
    const onChildExiting = (node) => {
      count++;
      expect(count).toEqual(2);
      expect(node.classList.contains('test-exit-active')).toEqual(true);
    };
    const onChildExited = (node) => {
      count++;
      expect(count).toEqual(3);
      expect(node.classList.contains('test-exit-done')).toEqual(true);
      done();
    };
    const { rerender } = render(
      <TestReplacement
        showContentA
        enterDuration={10}
        exitDuration={10}
        transitionClassNames="test"
        onChildExit={onChildExit}
        onChildExiting={onChildExiting}
        onChildExited={onChildExited}
      />,
    );

    // Update props to trigger transition
    rerender(
      <TestReplacement
        showContentA={false}
        enterDuration={10}
        exitDuration={10}
        transitionClassNames="test"
        onChildExit={onChildExit}
        onChildExiting={onChildExiting}
        onChildExited={onChildExited}
      />,
    );
  });
});
