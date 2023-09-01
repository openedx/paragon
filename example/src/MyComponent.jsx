import React, { useState } from 'react';
import { Button, Form, Icon, Bubble, Stack, Container } from '@openedx/paragon'; // eslint-disable-line
import { FavoriteBorder } from '@openedx/paragon/icons'; // eslint-disable-line

const MyComponent = () => {
  const [value, setValue] = useState('');
  const handleChange = (e) => setValue(e.target.value);
  const handleClick = () => alert('Form is submitted!'); // eslint-disable-line no-alert

  return (
    <Container className="p-5">
      <Stack direction="horizontal" gap={2}>
        <h1>My Form</h1>
        <Bubble variant="error">1</Bubble>
      </Stack>
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
    </Container>
  );
};

export default MyComponent;
