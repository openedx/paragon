/* eslint-disable no-plusplus, react/prop-types */
import React from 'react';
import { mount } from 'enzyme';

import TransitionReplace from './index';

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
  const wrapper = mount((
    <TestReplacement
      showContentA
      enterDuration={10}
      exitDuration={10}
      transitionClassNames="test"
    />
  ));

  it('should add entering class names for each part of the transition', (done) => {
    let count = 0;

    wrapper.setProps({
      showContentA: false,
      onChildEnter: (node) => {
        count++;
        expect(count).toEqual(1);
        expect(node.classList.contains('test-enter')).toEqual(true);
      },
      onChildEntering: (node) => {
        count++;
        expect(count).toEqual(2);
        expect(node.classList.contains('test-enter-active')).toEqual(true);
      },
      onChildEntered: (node) => {
        count++;
        expect(count).toEqual(3);
        expect(node.classList.contains('test-enter-done')).toEqual(true);
        done();
      },
    });
  });

  it('should add exiting class names for each part of the transition', (done) => {
    let count = 0;

    wrapper.setProps({
      showContentA: true, // swap from previous it()
      onChildEnter: undefined,
      onChildEntering: undefined,
      onChildEntered: undefined,
      onChildExit: (node) => {
        count++;
        expect(count).toEqual(1);
        expect(node.classList.contains('test-exit')).toEqual(true);
      },
      onChildExiting: (node) => {
        count++;
        expect(count).toEqual(2);
        expect(node.classList.contains('test-exit-active')).toEqual(true);
      },
      onChildExited: (node) => {
        count++;
        expect(count).toEqual(3);
        expect(node.classList.contains('test-exit-done')).toEqual(true);
        done();
      },
    });
  });
});
