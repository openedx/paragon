import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SEO from '../../components/SEO';
import Layout from '../../components/PageLayout';
import {
  Button, Form, Container,
  Toast, Icon, IconButtonWithTooltip,
} from '~paragon-react';
import { Close, WbSunny, DoDisturb } from '~paragon-icons';

const boxShadowSides = ['down', 'up', 'right', 'left', 'centered'];
const boxShadowLevels = [1, 2, 3, 4, 5];
const DEFAULT_BOX_SHADOW = '0px 0px 0px #000';

const controlsProps = [
  { key: 'x', name: 'Offset X' },
  { key: 'y', name: 'Offset Y' },
  { key: 'blur', name: 'Blur' },
  { key: 'spread', name: 'Spread' },
  { key: 'color', name: 'Color' },
];

function BoxShadowNode() {
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
        aria-label={`Box-shadow cell ${side}-${level}`}
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
      {boxShadowCells}
      <Toast
        className="pgn-doc__box-shadow--toast"
        onClose={() => setShowToast(false)}
        show={showToast}
        delay={2000}
      >
        Box-shadow copied to clipboard!
      </Toast>
    </div>
  );
}

function BoxShadowToolkit({
  id,
  updateBoxShadow,
  removeBoxShadowLayer,
  disableBoxShadowLayer,
  enableBoxShadowLayer,
  isDisabled,
  canDelete,
}) {
  const [boxShadowModel, setBoxShadowModel] = useState({
    x: 0,
    y: 0,
    blur: 0,
    spread: 0,
    color: '#000',
    inset: false,
  });

  const updateBoxShadowModel = (property, value) => {
    global.analytics.track('openedx.paragon.docs.elevation.generator.updated', { property, value });

    const newBoxShadowModel = {
      ...boxShadowModel,
      [property]: value,
    };

    setBoxShadowModel(newBoxShadowModel);
    updateBoxShadow(newBoxShadowModel, id);
  };

  return (
    <section className="pgn-doc__box-shadow-toolkit--controls-box">
      {controlsProps.map(({ key, name }) => (
        <Form.Group key={key}>
          <Form.Label
            className="d-block"
            htmlFor={`toolkit-control-${key}`}
          >
            {name}
          </Form.Label>
          <Form.Control
            id={`toolkit-control-${key}-${id}`}
            min={key === 'x' || key === 'y' ? '-100' : '0'}
            max="100"
            type={key === 'color' ? 'color' : 'range'}
            defaultValue="0"
            onChange={(e) => updateBoxShadowModel(key, e.target.value)}
            disabled={isDisabled}
          />
        </Form.Group>
      ))}
      <div className="pgn-doc__box-shadow-toolkit--controls-box--disable-btn-wrapper">
        <Form.Checkbox
          onChange={() => updateBoxShadowModel('inset', !boxShadowModel.inset)}
          floatLabelLeft
          disabled={isDisabled}
        >
          Inset:
        </Form.Checkbox>
        <div>
          {isDisabled ? (
            <IconButtonWithTooltip
              tooltipPlacement="top"
              tooltipContent="Enable layer"
              src={WbSunny}
              iconAs={Icon}
              alt="Enable layer"
              onClick={() => enableBoxShadowLayer(id)}
              variant="success"
              className="pgn-doc__box-shadow-toolkit--controls-box--disable-btn"
            />
          ) : (
            <IconButtonWithTooltip
              tooltipPlacement="top"
              tooltipContent="Disable layer"
              src={DoDisturb}
              iconAs={Icon}
              alt="Disable layer"
              onClick={() => disableBoxShadowLayer(id)}
              variant="secondary"
              className="pgn-doc__box-shadow-toolkit--controls-box--disable-btn"
            />
          )}
          {canDelete && (
            <IconButtonWithTooltip
              tooltipPlacement="top"
              tooltipContent="Remove layer"
              src={Close}
              iconAs={Icon}
              alt="Remove layer"
              onClick={() => removeBoxShadowLayer(id)}
              variant="danger"
              className="pgn-doc__box-shadow-toolkit--controls-box--remove-btn"
            />
          )}
        </div>
      </div>
    </section>
  );
}

BoxShadowToolkit.propTypes = {
  updateBoxShadow: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  removeBoxShadowLayer: PropTypes.func.isRequired,
  disableBoxShadowLayer: PropTypes.func.isRequired,
  enableBoxShadowLayer: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  canDelete: PropTypes.bool.isRequired,
};

function BoxShadowGenerator() {
  const [boxShadows, setBoxShadows] = useState([{ id: 1, enabled: true, style: DEFAULT_BOX_SHADOW }]);

  const updateBoxShadow = (shadow, id) => {
    setBoxShadows(boxShadows.map(item => {
      if (id === item.id) {
        return {
          ...item,
          style: shadow.inset
            ? `inset ${shadow.x}px ${shadow.y}px ${shadow.blur}px ${shadow.spread}px ${shadow.color}`
            : `${shadow.x}px ${shadow.y}px ${shadow.blur}px ${shadow.spread}px ${shadow.color}`,
        };
      }
      return { ...item };
    }));
  };

  const addNewBoxShadowLayer = () => {
    global.analytics.track('openedx.paragon.elevation.generator.layer.added');
    setBoxShadows([
      ...boxShadows,
      { id: boxShadows[boxShadows.length - 1].id + 1, enabled: true, style: DEFAULT_BOX_SHADOW },
    ]);
  };

  const removeBoxShadowLayer = (toolkitId) => {
    global.analytics.track('openedx.paragon.elevation.shadow-generator.layer.removed');
    setBoxShadows(boxShadows.filter((shadow) => shadow.id !== toolkitId));
  };

  const disableBoxShadowLayer = (toolkitId) => {
    global.analytics.track('openedx.paragon.elevation.shadow-generator.layer.disabled');
    const updatedBoxShadows = boxShadows
      .map((shadow) => {
        if (shadow.id === toolkitId) {
          return { ...shadow, enabled: false };
        }
        return shadow;
      });
    setBoxShadows(updatedBoxShadows);
  };

  const enableBoxShadowLayer = (toolkitId) => {
    global.analytics.track('openedx.paragon.elevation.shadow-generator.layer.enabled');
    const updatedBoxShadows = boxShadows
      .map((shadow) => {
        if (shadow.id === toolkitId) {
          return { ...shadow, enabled: true };
        }
        return shadow;
      });
    setBoxShadows(updatedBoxShadows);
  };

  return (
    <section className="pgn-doc__box-shadow-generator">
      <div className="pgn-doc__box-shadow-generator__preview">
        <div
          className="pgn-doc__box-shadow-generator__preview-box border"
          style={{ boxShadow: boxShadows.filter(shadow => shadow.enabled).map(shadow => shadow.style).join(',') }}
        />
      </div>
      <div className="pgn-doc__box-shadow-generator--toolkit">
        <div className="d-flex overflow-auto mb-2">
          {boxShadows.map((boxShadow) => (
            <BoxShadowToolkit
              key={boxShadow.id}
              id={boxShadow.id}
              updateBoxShadow={updateBoxShadow}
              removeBoxShadowLayer={removeBoxShadowLayer}
              disableBoxShadowLayer={disableBoxShadowLayer}
              enableBoxShadowLayer={enableBoxShadowLayer}
              isDisabled={!boxShadow.enabled}
              canDelete={boxShadows.length > 1}
            />
          ))}
        </div>
        <div className="d-flex justify-content-between flex-column flex-md-row">
          <code className="pgn-doc__box-shadow-generator--toolkit-code mb-3 mb-md-0">
            {boxShadows.filter(shadow => shadow.enabled).length > 0
              ? `box-shadow: ${boxShadows.filter(shadow => shadow.enabled).map(shadow => shadow.style).join(',')};`
              : 'No styles applied'}
          </code>
          <Button onClick={addNewBoxShadowLayer} variant="dark">Add New Layer</Button>
        </div>
      </div>
    </section>
  );
}

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
        <p>Include these box-shadows colors in scss files in this ways:</p>

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

        <h4>Example classes usage</h4>
        <p>Classes are available with following pattern: </p>
        <code className="d-block mb-2 bg-gray-100 p-3">
          {'.box-shadow-{direction}-{level}'}
        </code>
        <p>For example:</p>
        <code className="d-block mb-2 bg-gray-100 p-3">
          .box-shadow-right-2
        </code>
        <code className="d-block mb-2 bg-gray-100 p-3">
          .box-shadow-up-3
        </code>
        <br />

        <h4>Example mixin usage</h4>
        <p>Mixin can be used as follows: </p>
        <code className="d-block mb-2 bg-gray-100 p-3">
          @include pgn-box-shadow(level, side);
        </code>
        <p>For example:</p>
        <code className="d-block mb-2 bg-gray-100 p-3">
          @include pgn-box-shadow(1, &quot;down&quot;);
        </code>
        <code className="d-block mb-2 bg-gray-100 p-3">
          @include pgn-box-shadow(3, &quot;left&quot;);
        </code>
        <br />

        <h4>Example variables usage</h4>
        <p>Variables are available with following pattern: </p>
        <code className="d-block mb-2 bg-gray-100 p-3">
          {'$box-shadow-{direction}-{level}'}
        </code>
        <p>For example:</p>
        <code className="d-block mb-2 bg-gray-100 p-3">
          $box-shadow-right-2
        </code>
        <code className="d-block mb-2 bg-gray-100 p-3">
          $box-shadow-up-3
        </code>
        <br />

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
