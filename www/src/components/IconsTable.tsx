import React, { useEffect, useMemo, useState } from 'react';
import debounce from 'lodash.debounce';
import * as IconComponents from '~paragon-icons';
import { type IconName } from '~paragon-icons';
import { Icon, SearchField, Toast } from '~paragon-react';
import { ICON_COPIED_EVENT, sendUserAnalyticsEvent } from '../../segment-events';

const WINDOW_HEIGHT = 2400;
const ROW_HEIGHT = 100;
const ROWS_PER_WINDOW = WINDOW_HEIGHT / ROW_HEIGHT;
const COLUMN_WIDTH = 150;

interface TableCellProps {
  iconName: IconName;
  setCurrentIcon: (name: IconName) => void;
  previewRef: React.RefObject<HTMLDivElement>;
}

const TableCell: React.FC<TableCellProps> = ({
  iconName,
  setCurrentIcon,
  previewRef,
}) => {
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
};

interface TableRowProps {
  rowIndex: number;
  columnsCount: number;
  iconsList: IconName[];
  data: Pick<TableCellProps, 'previewRef' | 'setCurrentIcon'>
}

const TableRow: React.FC<TableRowProps> = ({
  rowIndex, columnsCount, iconsList, data,
}) => {
  const startIndex = rowIndex * columnsCount;
  const endIndex = startIndex + columnsCount;
  if (startIndex > iconsList.length) {
    return null;
  }
  const icons = iconsList.slice(startIndex, endIndex);

  return (
    <>
      {
        icons.map(iconName => (
          <TableCell
            key={iconName}
            iconName={iconName}
            setCurrentIcon={data.setCurrentIcon}
            previewRef={data.previewRef}
          />
        ))
      }
    </>
  );
};

function IconsTable({ iconNames }: { iconNames: IconName[] }) {
  const previewRef = React.useRef<HTMLDivElement>(null);
  const tableRef = React.useRef<HTMLDivElement>(null);
  const tableBottom = React.useRef<HTMLDivElement>(null);
  const [searchValue, setSearchValue] = useState('');
  const [tableWidth, setTableWidth] = useState(0);
  const [data, setData] = useState({ iconsList: iconNames, rowsCount: ROWS_PER_WINDOW });
  const [currentIcon, setCurrentIcon] = useState(iconNames[0]);
  const [showToast, setShowToast] = useState(false);
  const currentIconImport = `import { ${currentIcon} } from '@openedx/paragon/icons';`;
  const { rowsCount, iconsList } = data;

  const columnsCount = useMemo(() => Math.floor(tableWidth / COLUMN_WIDTH), [tableWidth]);

  const copyToClipboard = (content: string) => {
    navigator.clipboard.writeText(content);
    setShowToast(true);
    sendUserAnalyticsEvent(ICON_COPIED_EVENT, { name: currentIcon });
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

export default IconsTable;
