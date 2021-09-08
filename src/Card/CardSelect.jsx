import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Form from '../Form';

const CardSelect = ({
  className,
  cardsData,
  onChange,
  selectedCardName,
}) => {
  const [currentRecord, setCurrentRecord] = useState(null);
  useEffect(() => {
    setCurrentRecord(selectedCardName);
  }, []);

  return (
    <>
      <Form.Group>
        <Form.RadioSet
          name="radio-select-card"
          onChange={(e) => {
            setCurrentRecord(e.target.value);
            onChange(e.target.value);
          }}
          defaultValue={selectedCardName}
          isInline
          className="row"
        >
          {cardsData?.map(data => (
            <div
              key={data.name}
              className={className}
              role="group"
              aria-label={data.title}
            >
              <Card className={currentRecord === data.name ? 'border border-dark' : null}>
                <Card.Img variant="top" src={data.img} />
                <Card.Body>
                  <Card.Title as="h5" className="card-title mb-1">
                    <label htmlFor={data.name}>{data.title}</label>
                    <div className="float-right"><Form.Radio id={data.name} value={data.name} /></div>
                  </Card.Title>
                  <Card.Text>
                    {data.textElements?.map(ele => (
                      <p className={ele.className}>{ele.text}</p>
                    ))}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">{data.footer}</small>
                </Card.Footer>
              </Card>
            </div>
          ))}
        </Form.RadioSet>
      </Form.Group>
    </>
  );
};

CardSelect.defaultProps = {
  className: 'mb-3 col-md-3 offset-md-1',
  onChange: () => {},
};

CardSelect.propTypes = {
  /** The class name for the CardSelect component */
  className: PropTypes.string,
  /** The Card components data to organize into a radio selectable form */
  cardsData: PropTypes.node.isRequired,
  /** specifies the callback for the onChange event. The default value is a no-op function. */
  onChange: PropTypes.func,
  /** The selected card */
  selectedCardName: PropTypes.string.isRequired,
};

export default CardSelect;
