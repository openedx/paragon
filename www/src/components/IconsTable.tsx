import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';
import { Icon, SearchField, Toast } from '~paragon-react';
import * as IconComponents from '~paragon-icons';
import { ICON_COPIED, sendUserAnalyticsEvent } from '../../segment-events';

const WINDOW_HEIGHT = 2400;
const ROW_HEIGHT = 100;
const ROWS_PER_WINDOW = WINDOW_HEIGHT / ROW_HEIGHT;
const COLUMN_WIDTH = 150;

function TableCell({
  iconName,
  setCurrentIcon,
  previewRef,
}) {
  const handleClick = () => {
    setCurrentIcon(iconName);
    if (previewRef.current) {
      previewRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  if (!iconName) {
    return null;
  }

  return (
    <div
      role="button"
      key={iconName}
      className="pgn-doc__icons-table__cell"
      onKeyPress={handleClick}
      onClick={handleClick}
      tabIndex={0}
    >
      <Icon
        key={iconName}
        src={IconComponents[iconName]}
      />
      <span className="pgn-doc__icons-table__cell-text">{iconName}</span>
    </div>
  );
}

function TableRow({
  rowIndex, columnsCount, iconsList, data,
}) {
  const startIndex = rowIndex * columnsCount;
  const endIndex = startIndex + columnsCount;
  if (startIndex > iconsList.length) {
    return null;
  }
  const icons = iconsList.slice(startIndex, endIndex);

  return icons.map(iconName => (
    <TableCell key={iconName} iconName={iconName} setCurrentIcon={data.setCurrentIcon} previewRef={data.previewRef} />
  ));
}

function IconsTable({ iconNames }) {
  const previewRef = React.useRef(null);
  const tableRef = React.useRef(null);
  const tableBottom = React.useRef(null);
  const [searchValue, setSearchValue] = useState('');
  const [tableWidth, setTableWidth] = useState(0);
  const [data, setData] = useState({ iconsList: iconNames, rowsCount: ROWS_PER_WINDOW });
  const [currentIcon, setCurrentIcon] = useState(iconNames[0]);
  const [showToast, setShowToast] = useState(false);
  const currentIconImport = `import { ${currentIcon} } from '@edx/paragon/icons';`;
  const { rowsCount, iconsList } = data;

  const columnsCount = useMemo(() => Math.floor(tableWidth / COLUMN_WIDTH), [tableWidth]);

  const copyToClipboard = (content) => {
    navigator.clipboard.writeText(content);
    setShowToast(true);
    sendUserAnalyticsEvent(ICON_COPIED, { name: currentIcon });
  };

  const handleChangeSearchValue = useMemo(() => debounce(setSearchValue, 500, { leading: false }), []);

  useEffect(() => {
    if (tableRef.current) {
      const intersectionObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.intersectionRatio > 0) {
            setData((prev) => (
              { ...prev, rowsCount: prev.rowsCount + ROWS_PER_WINDOW }
            ));
          }
        },
        { root: null, rootMargin: '0px', threshold: [1] },
      );
      const resizeObserver = new ResizeObserver(entries => {
        for (let i = 0; i < entries.length; i++) {
          setTableWidth(entries[i].contentRect.width);
        }
      });
      if (tableBottom.current) {
        intersectionObserver.observe(tableBottom.current);
      }
      resizeObserver.observe(tableRef.current);
      return () => {
        intersectionObserver.disconnect();
        resizeObserver.disconnect();
      };
    }
    return undefined;
  }, []);

  useEffect(() => {
    const list = iconNames.filter(name => name.toLowerCase().includes(searchValue.toLowerCase()));
    if (searchValue.trim() !== '') {
      global.analytics?.track('openedx.paragon.docs.icons-table.search', { value: searchValue, amount: list.length });
    }
    setData({ rowsCount: ROWS_PER_WINDOW, iconsList: list });
  }, [iconNames, searchValue]);

  const rowsIndices = useMemo(() => [...Array(rowsCount).keys()], [rowsCount]);

  return (
    <>
      <SearchField
        onSubmit={() => {}}
        onChange={handleChangeSearchValue}
        placeholder="Search icons"
      />
      {currentIcon && (
        <div className="pgn-doc__icons-table__preview" ref={previewRef}>
          <div
            role="presentation"
            className="pgn-doc__icons-table__preview-title"
            onClick={() => copyToClipboard(currentIcon)}
          >
            <p className="rounded h3">{currentIcon}</p>
            <Icon
              key="ContentCopy"
              src={IconComponents.ContentCopy}
            />
          </div>
          <Icon
            key={currentIcon}
            src={IconComponents[currentIcon]}
          />
          <div
            role="presentation"
            className="pgn-doc__icons-table__preview-footer"
            onClick={() => copyToClipboard(currentIconImport)}
          >
            <code className="rounded">
              <small>
                {currentIconImport}
              </small>
            </code>
            <Icon
              key="ContentCopy"
              src={IconComponents.ContentCopy}
            />
          </div>
        </div>
      )}
      <div className="pgn-doc__icons-table" ref={tableRef}>
        {iconsList.length ? (
          <>
            {rowsIndices.map(row => (
              <TableRow
                key={`row${row}`}
                columnsCount={columnsCount}
                rowIndex={row}
                iconsList={iconsList}
                data={{ setCurrentIcon, previewRef }}
              />
            ))}
          </>
        ) : <span className="pgn-doc__icons-table__not-found">No result for {`"${searchValue}"`}</span>}
      </div>

      <div ref={tableBottom} />
      <Toast
        onClose={() => setShowToast(false)}
        show={showToast}
        delay={2000}
      >
        Copied to clipboard!
      </Toast>
    </>
  );
}

IconsTable.propTypes = {
  iconNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};

TableCell.propTypes = {
  iconName: PropTypes.string.isRequired,
  setCurrentIcon: PropTypes.func.isRequired,
  previewRef: PropTypes.shape({
    current: PropTypes.shape({
      scrollIntoView: PropTypes.func,
    }),
  }).isRequired,
};

TableRow.propTypes = {
  rowIndex: PropTypes.number.isRequired,
  columnsCount: PropTypes.number.isRequired,
  iconsList: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.shape({
    setCurrentIcon: PropTypes.func,
    previewRef: PropTypes.shape({
      current: PropTypes.shape({
        scrollIntoView: PropTypes.func,
      }),
    }),
  }).isRequired,
};

export default IconsTable;
