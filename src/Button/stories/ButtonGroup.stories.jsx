import Button from 'react-bootstrap/Button';
import { ButtonGroup } from '../index';

export default { title: 'Components/Button/Group', component: ButtonGroup };

const Template = (args) => (
  <ButtonGroup {...args}>
    <Button variant="primary">Left</Button>
    <Button variant="primary">Middle</Button>
    <Button variant="primary">Right</Button>
  </ButtonGroup>
);

export const Lg = Template.bind({});
Lg.args = { size: 'lg' };

export const Md = Template.bind({});
Md.args = { size: 'md' };

export const Sm = Template.bind({});
Sm.args = { size: 'sm' };

export const LgVertical = Template.bind({});
LgVertical.args = { size: 'lg', vertical: true };

export const MdVertical = Template.bind({});
MdVertical.args = { size: 'md', vertical: true };

export const SmVertical = Template.bind({});
SmVertical.args = { size: 'sm', vertical: true };
