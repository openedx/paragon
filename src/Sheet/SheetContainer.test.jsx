import React from 'react';
import { render, screen } from '@testing-library/react';
import SheetContainer from './SheetContainer';

const childId1 = 'sheet-container-TEST-child1';
const childId2 = 'sheet-container-TEST-child2';
const childContent1 = 'SoMe TExt';
const childContent2 = 'OThER teXT';

const child1 = (<div id={childId1}>{childContent1}</div>);
const child2 = (<div id={childId2}>{childContent2}</div>);

describe('<SheetContainer />', () => {
  it('adds itself to the dom if none exist', () => {
    render(<SheetContainer>{child1}</SheetContainer>);
    const rootEl = screen.getByTestId('sheet-container');
    expect(rootEl).toBeTruthy();
    expect(rootEl.className).toContain('sheet-container');
    const childEl = screen.getByText(childContent1);
    expect(childEl).toBeTruthy();
  });

  it('only adds itself once, when invoked multiple times', () => {
    render(<SheetContainer>{child1}</SheetContainer>);
    render(<SheetContainer>{child2}</SheetContainer>);
    const rootEl = screen.getByTestId('sheet-container');
    expect(rootEl).toBeTruthy();
    expect(rootEl.className).toContain('sheet-container');
    const childEl1 = screen.getByText(childContent1);
    expect(childEl1).toBeTruthy();
    const childEl2 = screen.getByText(childContent2);
    expect(childEl2).toBeTruthy();
  });
});
