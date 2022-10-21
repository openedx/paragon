import Button from '../../index';

export default { title: 'Components/Button/Deprecated/Variant', component: Button };

const Template = (args) => <Button.Deprecated {...args} />;

// Base button deprecated
export const Basic = Template.bind({});
Basic.args = { className: 'btn-primary', children: 'Hello World!' };

// Color Variants
export const Primary = Template.bind({});
Primary.args = { className: 'btn-primary', children: 'Primary' };

export const Success = Template.bind({});
Success.args = { className: 'btn-success', children: 'Success' };

export const Danger = Template.bind({});
Danger.args = { className: 'btn-danger', children: 'Danger' };

export const Light = Template.bind({});
Light.args = { className: 'btn-light', children: 'Light' };

export const Dark = Template.bind({});
Dark.args = { className: 'btn-dark', children: 'Dark' };

// Outline Variants
export const OutlinePrimary = Template.bind({});
OutlinePrimary.args = { className: 'btn-outline-primary', children: 'Primary' };

export const OutlineSuccess = Template.bind({});
OutlineSuccess.args = { className: 'btn-outline-success', children: 'Success' };

export const OutlineDanger = Template.bind({});
OutlineDanger.args = { className: 'btn-outline-danger', children: 'Danger' };

// Inverse Variants
export const InversePrimary = Template.bind({});
InversePrimary.args = { className: 'btn-inverse-primary', children: 'Primary' };

export const InverseSuccess = Template.bind({});
InverseSuccess.args = { className: 'btn-inverse-success', children: 'Success' };

export const InverseDanger = Template.bind({});
InverseDanger.args = { className: 'btn-inverse-danger', children: 'Danger' };

// Link Variant
export const BtnLink = Template.bind({});
BtnLink.args = { className: 'btn-link', children: 'Link with button container' };

export const BtnLinkWithPadding = Template.bind({});
BtnLinkWithPadding.args = { className: 'btn-link px-0', children: 'Button with no horizontal padding' };