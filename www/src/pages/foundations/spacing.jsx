import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Input } from '~paragon-react';
import SEO from '../../components/seo';

const directions = [
  { key: '', name: 'all' },
  { key: 't', name: 'top' },
  { key: 'r', name: 'right' },
  { key: 'b', name: 'bottom' },
  { key: 'l', name: 'left' },
  { key: 'x', name: 'x direction' },
  { key: 'y', name: 'y direction' },
];

const sizes = [5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5];

const getUtilityClassName = (prefix, direction, size) =>
  `${prefix}${direction}-${size < 0 ? 'n' : ''}${Math.abs(size)}`;


const SpaceBlock = ({ utilityClass }) => (
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

SpaceBlock.propTypes = {
  utilityClass: PropTypes.string,
};

SpaceBlock.defaultProps = {
  utilityClass: '',
};

export default function () {
  const [size, setSize] = useState(3);
  const [direction, setDirection] = useState('r');

  const utilityClassName = getUtilityClassName('m', direction, size);

  return (
    <div>
      <SEO title="Spacing" />
      <h1>Spacing</h1>

      <h3>Margin</h3>
      <p>
        Margin utilities are structured as <code>{'.m{direction}-{level}'}</code>.
        Negative numbers are represented
        as <code>n1</code>, <code>n2</code>, <code>n3</code>, etc.
        Choose a direction and spacing level to change the
        margin applied to the center block below.
      </p>
      <div className="border p-4">
        <div className="d-flex flex-column align-items-center">
          <h6>Direction</h6>
          <div className="mb-2">
            {directions.map(({ key, name }) => (
              <label
                className="form-check d-inline-block mr-4"
                htmlFor={`set-direction-${key}`}
              >
                <Input
                  id={`set-direction-${key}`}
                  key={key}
                  className="mt-0"
                  type="radio"
                  name="direction"
                  value={key}
                  checked={key === direction}
                  onChange={e => setDirection(e.target.value)}
                />
                {name}
              </label>
            ))}
          </div>
          <label
            className="d-block"
            htmlFor="set-size"
          >
            <span className="d-block text-center">Spacing Level: { size }</span>
            <div className="d-flex align-items-center" style={{ maxWidth: '20rem' }}>
              -5
              <Input
                type="range"
                id="set-size"
                className="mx-2"
                min={-5}
                step={1}
                max={5}
                value={size}
                onChange={e => setSize(e.target.value)}
              />
              5
            </div>
          </label>
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
        Padding utilities are structured the same way: <code>{'.p{direction}-{level}'}</code>.
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
              <td>
                {sizes.map(_size => <code className="d-block">.{getUtilityClassName('m', key, _size)}</code>)}
              </td>
            ))}
          </tr>
          <tr>
            <th colSpan={7}>Padding</th>
          </tr>
          <tr>
            {directions.map(({ key }) => (
              <td>
                {sizes.map(_size => <code className="d-block">.{getUtilityClassName('p', key, _size)}</code>)}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
