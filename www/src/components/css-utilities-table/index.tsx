import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// @ts-ignore
import { DataTable, Overlay, Popover } from '~paragon-react'; // eslint-disable-line
import CSSDeclaration from './Declaration';
import { colorCSSDeclaration } from './utils';

function CSSUtilitiesTable({ selectors }: CSSUtilities) {
  const [showPopover, setShowPopover] = useState<boolean>(false);
  const [popoverTarget, setPopoverTarget] = useState<HTMLElement | undefined>(undefined);
  const [computedStyle, setComputedStyle] = useState<string>('');

  useEffect(() => {
    // create an empty div to apply utility classes to it
    // and compute CSS variables on hover
    const dummyDiv = document.createElement('div');
    dummyDiv.id = 'dummyDiv';
    document.body.appendChild(dummyDiv);

    return () => { document.body.removeChild(dummyDiv); };
  }, []);

  const handleCSSVariableMouseEnter = (e: React.MouseEvent, declaration: string) => {
    setPopoverTarget(e.target as HTMLElement);
    setShowPopover(true);

    const propertyName = declaration.split(':')[0];
    const dummyDiv = document.getElementById('dummyDiv') as HTMLElement;
    dummyDiv.style.cssText = declaration;
    const computedProperty = getComputedStyle(dummyDiv).getPropertyValue(propertyName);
    setComputedStyle(computedProperty);
  };

  const handleCSSVariableMouseLeave = () => {
    setShowPopover(false);
    setPopoverTarget(undefined);

    const dummyDiv = document.getElementById('dummyDiv') as HTMLElement;
    dummyDiv.style.cssText = '';
    setComputedStyle('');
  };

  return (
    <div className="mb-4">
      <DataTable
        data={selectors.map(({ selector, declarations }) => ({
          selector: <code style={{ fontSize: '14px' }}>.{selector}</code>,
          declarations: (
            <div>
              {declarations.map(declaration => (
                <CSSDeclaration
                  key={declaration}
                  declaration={declaration}
                  handleMouseEnter={handleCSSVariableMouseEnter}
                  handleMouseLeave={handleCSSVariableMouseLeave}
                />
              ))}
            </div>
          ),
        }))}
        itemCount={selectors.length}
        columns={[
          {
            Header: 'Utility Class Name',
            accessor: 'selector',
          },
          {
            Header: 'Styles',
            accessor: 'declarations',
          },
        ]}
      >
        <DataTable.Table />
      </DataTable>
      <Overlay
        show={showPopover}
        target={popoverTarget}
        placement="top"
      >
        <Popover id="css-variable-value-popover">
          <Popover.Content>
            {computedStyle ? colorCSSDeclaration(computedStyle) : 'Computing...'}
          </Popover.Content>
        </Popover>
      </Overlay>
    </div>
  );
}

interface CSSUtilities {
  selectors: Array<{
    selector: string,
    declarations: Array<string>,
  }>,
}

CSSUtilitiesTable.propTypes = {
  selectors: PropTypes.arrayOf(
    PropTypes.shape({
      selector: PropTypes.string,
      declarations: PropTypes.arrayOf(PropTypes.string),
    }),
  ),
};

CSSUtilitiesTable.defaultProps = {
  selectors: [],
};

export default CSSUtilitiesTable;
