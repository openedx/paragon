import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SEO from '../../components/SEO';
import Layout from '../../components/PageLayout';
import {
  Button, Form, Container, Input, Toast,
} from '~paragon-react'; // eslint-disable-line import/no-unresolved

const boxShadowSides = ['down', 'up', 'right', 'left', 'centered'];
const boxShadowLevels = [1, 2, 3, 4, 5];

const controlsProps = [
  { key: 'x', name: 'Offset X' },
  { key: 'y', name: 'Offset Y' },
  { key: 'blur', name: 'Blur' },
  { key: 'spread', name: 'Spread' },
  { key: 'color', name: 'Color' },
];

const BoxShadowNode = () => {
  const [showToast, setShowToast] = useState(false);

  const isBoxShadowCopied = (level, side) => {
    navigator.clipboard.writeText(`@include pgn-box-shadow(${level}, "${side}");`);
    setShowToast(true);
  };

  const boxShadowCells = boxShadowLevels.map(level => (
    boxShadowSides.map(side => (
      <div
        key={side}
        role="button"
        className={`pgn-doc__box-shadow-cell box-shadow-${side}-${level}`}
        tabIndex={0}
        aria-label="Box-shadow cell"
        onClick={() => isBoxShadowCopied(level, side)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            isBoxShadowCopied(level, side);
          }
        }}
      />
    ))
  ));

  return (
    <div className="pgn-doc__box-shadow-cells">
      { boxShadowCells }
      {(
        <Toast
          className="pgn-doc__box-shadow--toast"
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={2000}
        >
          Box-shadow copied to clipboard!
        </Toast>
      )}
    </div>
  );
};

const BoxShadowToolkit = ({ updateBoxShadow, id }) => {
  const [boxShadowModel, setBoxShadowModel] = useState({
    x: 10,
    y: 10,
    blur: 25,
    spread: 0,
    color: '#000',
    inset: false,
  });

  const updateBoxShadowModel = (property, value) => {
    setBoxShadowModel({
      ...boxShadowModel,
      [property]: value,
    });
  };

  useEffect(() => {
    updateBoxShadow(boxShadowModel, id);
  }, [boxShadowModel]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className="pgn-doc__box-shadow-toolkit--controls-box">
      {controlsProps.map(({ key, name }) => (
        <Form.Label
          className="d-block"
          key={key}
          htmlFor={`toolkit-control-${key}`}
        >
          {name}
          <Input
            id={`toolkit-control-${key}`}
            key={key}
            min={key === 'x' || key === 'y' ? '-100' : '0'}
            max="100"
            type={key === 'color' ? 'color' : 'range'}
            defaultValue="0"
            onChange={(e) => updateBoxShadowModel(key, e.target.value)}
          />
        </Form.Label>
      ))}
      <Form.Checkbox
        onChange={() => updateBoxShadowModel('inset', !boxShadowModel.inset)}
        floatLabelLeft
      >
        Inset:
      </Form.Checkbox>
    </section>
  );
};

BoxShadowToolkit.propTypes = {
  updateBoxShadow: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

const BoxShadowGenerator = () => {
  const [boxShadows, setBoxShadows] = useState([]);
  const [controls, setControls] = useState([{ index: 0 }]);

  const updateBoxShadow = (shadow, id) => {
    const boxShadow = [...boxShadows];
    boxShadow[id] = shadow.inset ? `inset ${shadow.x}px ${shadow.y}px ${shadow.blur}px ${shadow.spread}px ${shadow.color}`
      : `${shadow.x}px ${shadow.y}px ${shadow.blur}px ${shadow.spread}px ${shadow.color}`;
    setBoxShadows(boxShadow);
  };

  const addBoxShadow = () => {
    setControls([...controls, {
      index: controls.length,
    }]);
  };

  return (
    <section className="pgn-doc__box-shadow-generator">
      <div className="pgn-doc__box-shadow-generator--preview">
        <div
          className="pgn-doc__box-shadow-generator--preview-box border"
          style={{ boxShadow: boxShadows.join(',') }}
        />
      </div>
      <div className="pgn-doc__box-shadow-generator--toolkit">
        <div className="d-flex overflow-auto mb-2">
          {controls.map(control => (
            <BoxShadowToolkit
              key={control.index}
              id={control.index}
              updateBoxShadow={updateBoxShadow}
            />
          ))}
        </div>
        <div className="d-flex justify-content-between flex-column flex-md-row">
          <code className="pgn-doc__box-shadow-generator--toolkit-code mb-3 mb-md-0">
            box-shadow: {boxShadows.join(', ')};
          </code>
          <Button onClick={addBoxShadow} variant="dark">Add New Layer</Button>
        </div>
      </div>
    </section>
  );
};

export default function ElevationPage() {
  const levelTitle = boxShadowLevels.map(level => (
    <h3 key={level} className="pgn-doc__box-shadow-level-title">
      Level {level}
    </h3>
  ));

  const sideTitle = boxShadowSides.map(side => (
    <h3 key={side} className="pgn-doc__box-shadow-side-title">
      {side.charAt(0).toUpperCase() + side.substring(1)}
    </h3>
  ));

  return (
    <Layout>
      <Container className="py-5" size="md">
        {/* eslint-disable-next-line react/jsx-pascal-case */}
        <SEO title="Elevation" />
        <h1 className="mb-3">Elevation & Shadow</h1>
        <h2 className="pgn-doc__box-shadow--title">Clickable Box-Shadow Grid</h2>
        <p className="mb-5">
          You can quickly add a <code>box-shadow</code> with the Clickable Box-Shadow Grid.
          Click on the <code>box-shadow</code> you like and it will be copied to your clipboard.
        </p>
        <div className="pgn-doc__box-shadow-wrapper">
          <div className="d-flex pt-1">
            <div className="pgn-doc__box-shadow-level-titles">
              {levelTitle}
            </div>
            <BoxShadowNode />
          </div>
          <div className="pgn-doc__box-shadow-side-titles">
            <h3 className="pgn-doc__box-shadow-side-title">
              Direction
            </h3>
            {sideTitle}
          </div>
        </div>

        <h3>Box-shadow Usage</h3>
        <p>Include these box-shadows colors in scss files in one of two ways:</p>

        <h4>Variable name</h4>
        <code className="d-block mb-4 lead bg-gray-100 p-3">
          <ul className="pgn-doc__level-number__box-shadow-variables">
            <li>{'// $level_number-box-shadow '}</li>
            {boxShadowLevels.map(level => (
              <li key={level}>$level-{level}-box-shadow</li>
            ))}
          </ul>
        </code>

        <h4>Mixin</h4>
        <code className="d-block mb-4 lead bg-gray-100 p-3">
          pgn-box-shadow($level, $side)
        </code>
        <div className="pgn-doc__box-shadow--table-wrapper">
          <table className="pgn-doc__table table">
            <tbody>
              <tr>
                <td>
                  <strong>Direction name</strong>
                </td>
                <td>
                  {boxShadowSides.map(side => (
                    <code key={side} className="mr-2">{side}</code>
                  ))}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Levels</strong>
                  <br />
                  <p>Box-shadows elevation levels</p>
                </td>
                <td>
                  {boxShadowLevels.map(level => (
                    <code key={level} className="mr-2">{level}</code>
                  ))}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4>Example mixin usage</h4>
        {boxShadowLevels.map(level => (
          boxShadowSides.map(side => (
            <code key={side} className="d-block mb-2 bg-gray-100 p-3">
              @include <strong>pgn-box-shadow({level}, &ldquo;{side}&rdquo;)</strong>;
            </code>
          ))
        ))}
        <br />

        <h4>Example variables usage</h4>
        {boxShadowLevels.map(level => (
          <code key={level} className="d-block mb-2 bg-gray-100 p-3">
            box-shadow: <strong>$level-{level}-box-shadow</strong>;
          </code>
        ))}

        <h3 className="mt-5">Box-shadow generator</h3>
        <p>
          Use the sliders and the color picker to set the values and watch the live preview until you reach the
          desired effect. Select the <code>right-down shift</code>, <code>spread</code>, <code>blur</code>,
          and <code>color</code>. Pick a custom color for
          the preview background and your object. Web browsers allow us to add more than one shadow to our design
          and so does this online tool. Use the Add New Layer button to save the current line and set up a new one.
        </p>
        <BoxShadowGenerator />
      </Container>
    </Layout>
  );
}
