import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SEO from '../../components/SEO';
import Layout from '../../components/PageLayout';
import { Button, Form, Container, Input } from '~paragon-react'; // eslint-disable-line

const boxShadowSides = ['down', 'up', 'right', 'left', 'centered'];
const boxShadowLevels = ['0 (None)', 1, 2, 3, 4, 5];

const controlsProps = [
  { key: 'x', name: 'Offset X' },
  { key: 'y', name: 'Offset Y' },
  { key: 'blur', name: 'Blur' },
  { key: 'spread', name: 'Spread' },
  { key: 'color', name: 'Color' },
];

const BoxShadowNode = ({ side }) => {
  const boxShadowElement = boxShadowLevels.map(
    level => <div key={level} className={`pgn-doc__box-shadow-cell box-shadow-${side}-${level}`} />,
  );
  return (
    <div className="pgn-doc__box-shadow-cells">
      { boxShadowElement }
    </div>
  );
};

BoxShadowNode.propTypes = {
  side: PropTypes.string.isRequired,
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

  const updateBoxShadowModel = (props, value) => {
    setBoxShadowModel({
      ...boxShadowModel,
      [props]: value,
    });
  };

  useEffect(() => {
    updateBoxShadow(boxShadowModel, id);
  }, [boxShadowModel]); // eslint-disable-line

  return (
    <aside className="pgn-doc__box-shadow-toolkit--controls-box">
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
        value="Inset"
        floatLabelLeft
      >
        Inset:
      </Form.Checkbox>
    </aside>
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
        <div className="d-flex justify-content-between">
          <code className="pgn-doc__box-shadow-generator--toolkit-code d-block bg-gray-100">
            box-shadow: {boxShadows.join(', ')};
          </code>
          <Button onClick={addBoxShadow} variant="dark">Add New Layer</Button>
        </div>
      </div>
    </section>
  );
};

export default function ElevationPage() {
  const levelTitle = boxShadowLevels
    .map(level => <h4 key={level} className="pgn-doc__box-shadow-level-title">Level {level}</h4>);
  const sideTitle = boxShadowSides.map(side => (
    <h4 key={side} className="pgn-doc__box-shadow-side-title">
      {side.charAt(0).toUpperCase() + side.substring(1)}
    </h4>
  ));

  const boxShadowItem = boxShadowSides.map(side => <BoxShadowNode key={side} side={side} />);
  return (
    <Layout>
      <Container size="md" className="py-5">
        <SEO title="Elevation" />
        <h1>Elevation & Shadow</h1>
        <div className="d-flex">
          <div className="pgn-doc__box-shadow-level-titles">
            {levelTitle}
          </div>
          {boxShadowItem}
        </div>
        <div className="d-flex">
          <h4 className="pgn-doc__box-shadow-side-title">
            Direction
          </h4>
          {sideTitle}
        </div>

        <h2>Box-shadow generator</h2>
        <BoxShadowGenerator />

        <h3>Box-shadow Usage</h3>
        <p>Include these box-shadows colors in scss files in one of two ways:</p>

        <h6>Variable name</h6>
        <code className="d-block mb-4 lead bg-gray-100 p-3">
          {'// $level_number-box-shadow '}
          <br />
          $level-1-box-shadow
          <br />
          $level-2-box-shadow
          <br />
          $level-3-box-shadow
          <br />
          $level-4-box-shadow
          <br />
          $level-5-box-shadow
        </code>

        <h6>Mixin</h6>
        <code className="d-block mb-4 lead bg-gray-100 p-3">
          pgn-box-shadow($level, $side)
        </code>

        <table className="table pgn-doc__table">
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

        <h6>Example mixin usage</h6>
        <code className="d-block mb-2 bg-gray-100 p-3">
          @include <strong>pgn-box-shadow(1, &ldquo;down&rdquo;)</strong>;
        </code>
        <code className="d-block mb-2 bg-gray-100 p-3">
          @include <strong>pgn-box-shadow(2, &ldquo;up&rdquo;)</strong>;
        </code>
        <code className="d-block mb-2 bg-gray-100 p-3">
          @include <strong>pgn-box-shadow(3, &ldquo;right&rdquo;)</strong>;
        </code>
        <code className="d-block mb-2 bg-gray-100 p-3">
          @include <strong>pgn-box-shadow(4, &ldquo;left&rdquo;)</strong>;
        </code>
        <code className="d-block mb-2 bg-gray-100 p-3">
          @include <strong>pgn-box-shadow(5, &ldquo;centered&rdquo;)</strong>;
        </code>
        <br />

        <h6>Example variables usage</h6>
        <code className="d-block mb-2 bg-gray-100 p-3">
          box-shadow: <strong>$level-1-box-shadow</strong>;
        </code>
        <code className="d-block mb-2 bg-gray-100 p-3">
          box-shadow: <strong>$level-2-box-shadow</strong>;
        </code>
        <code className="d-block mb-2 bg-gray-100 p-3">
          box-shadow: <strong>$level-3-box-shadow</strong>;
        </code>
        <code className="d-block mb-2 bg-gray-100 p-3">
          box-shadow: <strong>$level-4-box-shadow</strong>;
        </code>
        <code className="d-block mb-2 bg-gray-100 p-3">
          box-shadow: <strong>$level-5-box-shadow</strong>;
        </code>
      </Container>
    </Layout>
  );
}
