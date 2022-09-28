import React, { useState } from 'react';
import { Button, Form, Icon } from '@edx/paragon'; // eslint-disable-line
import { FavoriteBorder } from '@edx/paragon/icons'; // eslint-disable-line

function MyComponent() {
  const [value, setValue] = useState('');
  const handleChange = (e) => setValue(e.target.value);
  // eslint-disable-next-line no-alert
  const handleClick = () => alert('Form is submitted!');

  return (
    <div className="p-5">
      <h1>My Form</h1>
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
}

export default MyComponent;
