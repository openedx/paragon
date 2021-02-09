import React from 'react';
import { mount } from 'enzyme';
import SheetContainer from './SheetContainer';

const childId1 = 'sheet-container-TEST-child1';
const childId2 = 'sheet-container-TEST-child2';
const childContent1 = 'SoMe TExt';
const childContent2 = 'OThER teXT';

const child1 = (<div id={childId1}>{childContent1}</div>);
const child2 = (<div id={childId2}>{childContent2}</div>);

describe('<SheetContainer />', () => {
  it('adds itself to the dom if none exist', () => {
    mount(<SheetContainer>{child1}</SheetContainer>);
    const rootEl = document.getElementById('sheet-root');
    expect(rootEl).not.toBeNull();
    expect(rootEl.classList.contains('sheet-container')).toEqual(true);
    const childEl = rootEl.querySelector(`#${childId1}`);
    expect(childEl.innerHTML).toEqual(childContent1);
  });

  it('only adds itself once, when invoked multiple times', () => {
    mount(<SheetContainer>{child1}</SheetContainer>);
    mount(<SheetContainer>{child2}</SheetContainer>);
    const rootEls = document.querySelectorAll('#sheet-root');
    expect(rootEls.length).toEqual(1);
    const childEl1 = rootEls[0].querySelector(`#${childId1}`);
    expect(childEl1.innerHTML).toEqual(childContent1);
    const childEl2 = rootEls[0].querySelector(`#${childId2}`);
    expect(childEl2.innerHTML).toEqual(childContent2);
  });
});
