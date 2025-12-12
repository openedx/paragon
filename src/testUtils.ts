/**
 * For convenience, all the common imports used for testing are grouped into
 * this file. Using this file will also ensure that you are using "strict"
 * assertions, which you should always be using.
 */
/* eslint-disable import/no-extraneous-dependencies */
import strictAsserts from 'node:assert/strict';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import { Mock } from 'node:test';

export { describe, mock, it } from 'node:test';
export { renderer, userEvent };
export { render, screen, within } from '@testing-library/react';

// Custom assertion functions.
// Note: TypeScript requires that custom assertions have very explicit typing,
// hence the weird layout of this file.

/** Assert that the given HTML element include the specified CSS class */
function containsClass(element: HTMLElement, className: string): void {
  strictAsserts.ok(
    element.classList.contains(className),
    `expected className "${element.className}" to contain "${className}"`,
  );
}

/** Assert that the given mock was called (N times) */
function wasCalled(mockFn: Mock<Function>, timesCalled = 1): void {
  strictAsserts.equal(
    mockFn.mock.callCount(),
    timesCalled,
    `Expected mock to have been called ${timesCalled} time(s), but it was called ${mockFn.mock.callCount()} time(s).`,
  );
}

/** Assert that the given mock was NOT called */
function wasNotCalled(mockFn: Mock<Function>): void {
  wasCalled(mockFn, 0);
}

/** node.js assertions with custom extensions */
export const assert: Pick<typeof strictAsserts,
'equal' |
'notEqual' |
'deepEqual' |
'notDeepEqual' |
'ok' |
// 'strictEqual' | -> equal is already strictEqual
'ifError' |
'throws' |
'doesNotThrow' |
'match' |
'doesNotMatch' |
'rejects' |
'doesNotReject'
// 'partialDeepStrictEqual' will be a useful new one in Node 25
> & {
  containsClass: typeof containsClass,
  wasCalled: typeof wasCalled,
  wasNotCalled: typeof wasNotCalled,
} = {
  ...strictAsserts,
  containsClass,
  wasCalled,
  wasNotCalled,
};
