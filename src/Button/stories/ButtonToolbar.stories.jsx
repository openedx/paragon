import Button from 'react-bootstrap/Button';
import { ButtonGroup, ButtonToolbar } from '../index';

export default { title: 'Components/Button/Toolbar', component: ButtonGroup };

const Template = (args) => (
  <ButtonToolbar aria-label="Toolbar with button groups" {...args}>
    <ButtonGroup className="mie-2" aria-label="First group">
      <Button variant="primary">1</Button>
      <Button variant="primary">2</Button>
      <Button variant="primary">3</Button>
      <Button variant="primary">4</Button>
    </ButtonGroup>
    <ButtonGroup className="mie-2" aria-label="Second group">
      <Button variant="primary">5</Button>
      <Button variant="primary">6</Button>
      <Button variant="primary">7</Button>
    </ButtonGroup>
    <ButtonGroup aria-label="Third group">
      <Button variant="primary">8</Button>
    </ButtonGroup>
  </ButtonToolbar>
);

export const Default = Template.bind({});
