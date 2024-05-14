import React from 'react';
import PropTypes from 'prop-types';
import { Form, Badge } from '~paragon-react';

function ExamplePropsForm({ inputs }) {
  return (
    <div className="pgn-doc__example-props-form">
      <h4>Props panel</h4>
      {inputs.map(input => {
        if (input.options) {
          return (
            <Form.Group key={input.name}>
              <Form.Label>
                <Badge variant="light">{input.name}</Badge>
              </Form.Label>
              <Form.RadioSet
                isInline
                name={input.name}
                onChange={(e) => input.setValue(e.target.value)}
                value={input.value}
              >
                {input.options.map(option => (
                  <Form.Radio
                    value={option.value || option}
                    key={option.value || option}
                  >
                    {option.name || option.value || option}
                  </Form.Radio>
                ))}
              </Form.RadioSet>
            </Form.Group>
          );
        }
        if (input.range) {
          return (
            <Form.Group key={input.name}>
              <Form.Label>
                <Badge variant="light">{input.name}: {input.value}</Badge>
              </Form.Label>
              <div className="d-flex align-items-center">
                <Form.Label>{input.range.min}</Form.Label>
                <Form.Control
                  type="range"
                  className="mx-2"
                  min={input.range.min}
                  step={input.range.step || 1}
                  max={input.range.max}
                  value={input.value}
                  onChange={e => input.setValue(e.target.value)}
                />
                <Form.Label>{input.range.max}</Form.Label>
              </div>
            </Form.Group>
          );
        }
        return (
          <Form.Group key={input.name}>
            <Form.Switch
              checked={input.value}
              onChange={(e) => input.setValue(e.target.value)}
              name={input.name}
            >
              <Badge variant="light">
                {input.name}: {(!!input.value).toString()}
              </Badge>
            </Form.Switch>
          </Form.Group>
        );
      })}
    </div>
  );
}

ExamplePropsForm.propTypes = {
  inputs: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.number]).isRequired,
    setValue: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    options: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.shape({
        value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        name: PropTypes.string,
      }),
    ]),
    range: PropTypes.shape({
      min: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired,
      step: PropTypes.number,
    }),
  })).isRequired,
};

export default ExamplePropsForm;
