import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FixedSizeGrid as Grid } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import debounce from 'lodash.debounce';
import { Icon, SearchField, Toast } from '~paragon-react'; // eslint-disable-line
import * as IconComponents from '~paragon-icons'; // eslint-disable-line

const ICON_NAMES = Object.keys(IconComponents);
const ROW_HEIGHT = 100;
const COLUMN_WIDTH = 150;
const SCROLL_OFFSET = 17;

const Cell = ({
  columnIndex,
  rowIndex,
  data,
  style,
}) => {
  const {
    iconsList, previewRef, setCurrentIcon, columnCount,
  } = data;
  const index = rowIndex * columnCount + columnIndex;
  const iconName = iconsList[index];

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
    <>
      <div
        role="button"
        key={iconName}
        className="pgn-doc__icons-table__cell"
        style={style}
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
    </>
  );
};

const IconsTable = () => {
  const previewRef = React.useRef(null);
  const [searchValue, setSearchValue] = useState('');
  const [iconsList, setIconsList] = useState(ICON_NAMES);
  const [currentIcon, setCurrentIcon] = useState(ICON_NAMES[0]);
  const [showToast, setShowToast] = useState(false);
  const currentIconImport = `import { ${currentIcon} } from '@edx/paragon/icons';`;

  const copyToClipboard = (content) => {
    navigator.clipboard.writeText(content);
    setShowToast(true);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSetIconsList = useCallback(
    debounce(setIconsList, 250, { leading: true }),
    [],
  );

  useEffect(() => {
    debouncedSetIconsList(
      ICON_NAMES.filter(name => name.toLowerCase().includes(searchValue.toLowerCase())),
    );
  }, [searchValue, iconsList, debouncedSetIconsList]);

  return (
    <>
      <SearchField
        onSubmit={() => {}}
        onChange={value => setSearchValue(value)}
        placeholder="Search icons"
      />
      {currentIcon && (
        <div className="pgn-doc__icons-table__preview" ref={previewRef}>
          <h3
            role="presentation"
            className="rounded"
            onClick={() => copyToClipboard(currentIcon)}
          >
            {currentIcon}
          </h3>
          <Icon
            key={currentIcon}
            src={IconComponents[currentIcon]}
          />
          <code
            role="presentation"
            className="rounded"
            onClick={() => copyToClipboard(currentIconImport)}
          >
            <small>
              {currentIconImport}
            </small>
          </code>
        </div>
      )}
      {iconsList.length ? (
        <div className="pgn-doc__icons-table">
          <AutoSizer>
            {({ height, width }) => {
              const columnCount = Math.floor(width / COLUMN_WIDTH);
              const currentWidth = columnCount * COLUMN_WIDTH + SCROLL_OFFSET;

              return (
                <Grid
                  className="pgn-doc-icons-table__grid"
                  width={currentWidth}
                  height={height}
                  columnWidth={COLUMN_WIDTH}
                  columnCount={columnCount}
                  rowCount={Math.ceil(iconsList.length / columnCount)}
                  rowHeight={ROW_HEIGHT}
                  itemData={{
                    iconsList, columnCount, setCurrentIcon, previewRef,
                  }}
                >
                  {Cell}
                </Grid>
              );
            }}
          </AutoSizer>
        </div>
      ) : <span className="pgn-doc__icons-table__not-found">No result for {`"${searchValue}"`}</span>}
      <Toast
        onClose={() => setShowToast(false)}
        show={showToast}
        delay={2000}
      >
        Copied to clipboard!
      </Toast>
    </>
  );
};

Cell.propTypes = {
  columnIndex: PropTypes.number.isRequired,
  rowIndex: PropTypes.number.isRequired,
  data: PropTypes.shape({
    iconsList: PropTypes.arrayOf(PropTypes.string).isRequired,
    columnCount: PropTypes.number.isRequired,
    setCurrentIcon: PropTypes.func.isRequired,
    previewRef: PropTypes.shape({
      // eslint-disable-next-line react/forbid-prop-types
      current: PropTypes.object,
    }),
  }).isRequired,
  style: PropTypes.shape({
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
};

Cell.defaultProps = {
  style: {
    height: 0,
    width: 0,
  },
};

export default IconsTable;
