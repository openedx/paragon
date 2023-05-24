import React, { useState } from 'react';
import { Button, Form, Icon, Bubble } from '@edx/paragon'; // eslint-disable-line
import { FavoriteBorder } from '@edx/paragon/icons'; // eslint-disable-line

const MyComponent = () => {
  const [value, setValue] = useState('');
  const handleChange = (e) => setValue(e.target.value);
  // eslint-disable-next-line no-alert
  const handleClick = () => alert('Form is submitted!');

  return (
    <div className="p-5">
      <div className="d-flex align-items-center">
        <h1 className="mr-2">
          My Form
        </h1>
        <Bubble variant="error">1</Bubble>
      </div>
      <Form>
        <Form.Group>
          <Form.Control
            value={value}
            onChange={handleChange}
            leadingElement={<Icon src={FavoriteBorder} />}
            floatingLabel="My component"
          />
        </Form.Group>
        <Button onClick={handleClick}>Submit</Button>
      </Form>
    </div>
  );
};

export default MyComponent;
