import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Form, DataTable, Container } from '~paragon-react';
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

export default function SpacingPage({ pageContext }) {
  const { settings } = useContext(SettingsContext);
  const [size, setSize] = useState<number>(3);
  const [direction, setDirection] = useState<string>('r');

  const utilityClassName = getUtilityClassName('m', direction, size);

  const spacerValuesTableData = spacerValues.map(value => ({
    spacer: value,
    pixelValue: <PixelCell spacer={value} />,
  }));

  return (
    <Layout isAutoToc githubEditPath={pageContext.githubEditPath}>
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
          itemCount={0}
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
            <p className="h4">Direction</p>
            <div className="d-flex flex-wrap mt-2">
              {directions.map(({ key, name }) => (
                <Form.Radio
                  key={key}
                  className="mx-2 mb-3"
                  name="direction"
                  value={key}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDirection(e.target.value)}
                >
                  {name}
                </Form.Radio>
              ))}
            </div>
            <Form.Group>
              <Form.Label className="d-block">
                <span className="d-block text-center">Spacing Level: {size}</span>
              </Form.Label>
              <div
                className="d-flex align-items-center"
                style={{ maxWidth: '20rem' }}
              >
                -6
                <Form.Control
                  className="mx-2"
                  type="range"
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

        <h3>All Spacing Utility Classes</h3>
        <table className="table">
          <thead>
            <tr>
              <th>All directions</th>
              <th>Top</th>
              <th>Right</th>
              <th>Bottom</th>
              <th>Left</th>
              <th>X Direction</th>
              <th>Y Direction</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th colSpan={7}>Margin</th>
            </tr>
            <tr>
              {directions.map(({ key }) => (
                <td key={key}>
                  {sizes.map(_size => (
                    <code key={_size} className="d-block">
                      .{getUtilityClassName('m', key, _size)}
                    </code>
                  ))}
                </td>
              ))}
            </tr>
            <tr>
              <th colSpan={7}>Padding</th>
            </tr>
            <tr>
              {directions.map(({ key }) => (
                <td key={key}>
                  {sizes.map(_size => (
                    <code key={_size} className="d-block">
                      .{getUtilityClassName('p', key, _size)}
                    </code>
                  ))}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </Container>
    </Layout>
  );
}

SpacingPage.propTypes = {
  pageContext: PropTypes.shape({
    githubEditPath: PropTypes.string,
  }).isRequired,
};
