import React from 'react';
import { render } from '@testing-library/react';
import Portal from './Portal';

const getPortalRoot = () => {
  const portalRoot = global.document.getElementById('paragon-portal-root');
  if (!portalRoot) {
    const newPortalRoot = document.createElement('div');
    newPortalRoot.setAttribute('id', 'paragon-portal-root');
    document.body.appendChild(newPortalRoot);
    return newPortalRoot;
  }
  return portalRoot;
};

describe('<Portal />', () => {
  beforeEach(() => {
    const portalRoot = getPortalRoot();
    while (portalRoot.firstChild) {
      portalRoot.removeChild(portalRoot.firstChild);
    }
  });

  it('renders content in a #paragon-portal-root div', () => {
    render(
      <Portal>
        <div id="portal-content-a">Content A</div>
      </Portal>,
    );

    const portalRoot = getPortalRoot();
    expect(portalRoot).not.toBeNull();
    expect(portalRoot.children[0].id).toBe('portal-content-a');
  });

  it('renders both contents in a single #paragon-portal-root div', () => {
    render(
      <div>
        <Portal>
          <div id="portal-content-a">Content A</div>
        </Portal>
        <Portal>
          <div id="portal-content-b">Content B</div>
        </Portal>
      </div>,
    );

    const portalRoot = getPortalRoot();
    expect(portalRoot).not.toBeNull();
    expect(portalRoot.children[0].id).toBe('portal-content-a');
    expect(portalRoot.children[1].id).toBe('portal-content-b');
  });
});
