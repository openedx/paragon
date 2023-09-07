import React from 'react';
import { render } from '@testing-library/react';
import Portal from './Portal';

const getPortalRoot = () => global.document.getElementById('paragon-portal-root');

describe('<Portal />', () => {
  beforeEach(() => {
    const portalRoot = getPortalRoot();
    if (portalRoot) {
      portalRoot.remove();
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
