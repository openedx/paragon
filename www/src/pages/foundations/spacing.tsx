import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Form, DataTable, Container } from '~paragon-react'; // eslint-disable-line
import SEO from '../../components/SEO';
import Layout from '../../components/PageLayout';
import MeasuredItem from '../../components/MeasuredItem';
import { SettingsContext } from '../../context/SettingsContext';

const directions = [
  { key: '', name: 'all' },
  { key: 't', name: 'top' },
  { key: 'r', name: 'right' },
  { key: 'b', name: 'bottom' },
  { key: 'l', name: 'left' },
  { key: 'x', name: 'x direction' },
  { key: 'y', name: 'y direction' },
];

const spacerValues = [0, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6];
const sizes = [...spacerValues.slice(1).reverse(), ...spacerValues.map(value => -value)];

const getUtilityClassName = (
  prefix: string,
  direction: string,
  size: number,
) => `${prefix}${direction}-${size < 0 ? 'n' : ''}${Math.abs(size)}`;

export type PixelCellTypes = {
  spacer: number,
};

function PixelCell({ spacer }: PixelCellTypes) {
  return (
    <MeasuredItem
      properties={['margin']}
      renderAfter={(measurements: { margin: number }) => (
        <code>
          {measurements.margin}
        </code>
      )}
    >
      <div
        style={{ display: 'none' }}
        className={`m-${spacer}`}
      />
    </MeasuredItem>
  );
}

PixelCell.propTypes = {
  spacer: PropTypes.number.isRequired,
};

export type SpaceBlockTypes = {
  utilityClass: string,
};

function SpaceBlock({ utilityClass }: SpaceBlockTypes) {
  return (
    <code
      className={classNames(utilityClass)}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '5rem',
        textAlign: 'center',
        width: '10rem',
        background: 'rgba(0,0,0,.1)',
      }}
    >
      {utilityClass ? `.${utilityClass}` : null}
    </code>
  );
}

SpaceBlock.propTypes = {
  utilityClass: PropTypes.string,
};

SpaceBlock.defaultProps = {
  utilityClass: '',
};

export default function SpacingPage() {
  const { settings } = useContext(SettingsContext);
  const [size, setSize] = useState<number>(3);
  const [direction, setDirection] = useState<string>('r');

  const utilityClassName = getUtilityClassName('m', direction, size);

  const spacerValuesTableData = spacerValues.map(value => ({
    spacer: value,
    pixelValue: <PixelCell spacer={value} />,
  }));

  const createUtilityClassesTabel = (prefix) => sizes.map(el => {
    const rowData = {};

    directions.forEach(({ key, name }) => {
      rowData[name] = <code>.{getUtilityClassName(prefix, key, el)}</code>;
    });

    return rowData;
  });

  return (
    <Layout isAutoToc>
      {/* eslint-disable-next-line react/jsx-pascal-case */}
      <SEO title="Spacing" />
      <Container size={settings.containerWidth} className="py-5">
        <h1>Spacing</h1>
        <h2>Spacing according to pixels</h2>
        <DataTable
          className="pgn-doc__spacing-table"
          data={spacerValuesTableData}
          columns={[
            { Header: 'Spacer value', accessor: 'spacer' },
            { Header: 'Pixel value', accessor: 'pixelValue' },
          ]}
        >
          <DataTable.Table />
        </DataTable>
        <h3 className="mt-3">Margin</h3>
        <p>
          Margin utilities are structured as{' '}
          <code>{'.m{direction}-{level}'}</code>. Negative numbers are
          represented as <code>n1</code>, <code>n2</code>, <code>n3</code>, etc.
          Choose a direction and spacing level to change the margin applied to
          the center block below.
        </p>
        <div className="border p-4">
          <div className="d-flex flex-column align-items-center">
            <Form.Group className="d-flex flex-column align-items-center">
              <Form.Label className="font-weight-bolder">Direction</Form.Label>
              <Form.RadioSet
                name="direction-selector"
                value={direction}
                isInline
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDirection(e.target.value)}
              >
                {directions.map(({ key, name }) => (
                  <Form.Radio
                    id={`set-direction-${key}`}
                    key={key}
                    className="mt-0"
                    value={key}
                  >
                    {name}
                  </Form.Radio>
                ))}
              </Form.RadioSet>
            </Form.Group>
            <Form.Group>
              <Form.Label className="d-block">
                <span className="d-block text-center">Spacing Level: {size}</span>
              </Form.Label>
              <div
                className="d-flex align-items-center mt-1"
                style={{ maxWidth: '20rem' }}
              >
                -6
                <Form.Control
                  type="range"
                  id="set-size"
                  className="mx-2"
                  min={-6}
                  step={0.5}
                  max={6}
                  value={size}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSize(parseInt(e.target.value, 10))}
                />
                6
              </div>
            </Form.Group>
          </div>
          <div className="d-flex justify-content-center">
            <SpaceBlock />
          </div>
          <div className="d-flex justify-content-center">
            <SpaceBlock />
            <div className="border border-danger  p-0" style={{}}>
              <SpaceBlock utilityClass={utilityClassName} />
            </div>
            <SpaceBlock />
          </div>
          <div className="d-flex justify-content-center">
            <SpaceBlock />
          </div>
        </div>
        <h3>Padding</h3>
        <p>
          Padding utilities are structured the same way:{' '}
          <code>{'.p{direction}-{level}'}</code>.
        </p>

        <h3 className="mt-4">All Spacing Utility Classes</h3>

        <h4 className="mt-3">Margin</h4>
        <DataTable
          className="pgn-doc__spacing-table"
          data={createUtilityClassesTabel('m')}
          columns={[
            { Header: 'All directions', accessor: 'all' },
            { Header: 'Top', accessor: 'top' },
            { Header: 'Right', accessor: 'right' },
            { Header: 'Bottom', accessor: 'bottom' },
            { Header: 'Left', accessor: 'left' },
            { Header: 'X Direction', accessor: 'x direction' },
            { Header: 'Y Direction', accessor: 'y direction' },
          ]}
        >
          <DataTable.Table />
        </DataTable>
        <h4 className="mt-3">Padding</h4>
        <DataTable
          className="pgn-doc__spacing-table"
          data={createUtilityClassesTabel('p')}
          columns={[
            { Header: 'All directions', accessor: 'all' },
            { Header: 'Top', accessor: 'top' },
            { Header: 'Right', accessor: 'right' },
            { Header: 'Bottom', accessor: 'bottom' },
            { Header: 'Left', accessor: 'left' },
            { Header: 'X Direction', accessor: 'x direction' },
            { Header: 'Y Direction', accessor: 'y direction' },
          ]}
        >
          <DataTable.Table />
        </DataTable>
      </Container>
    </Layout>
  );
}
