import Button from '../index';

export default { title: 'Components/Button/Variant', component: Button };

const Template = (args) => <Button {...args} />;

// Core buttons
export const Brand = Template.bind({});
Brand.args = { children: 'Brand', variant: 'brand' };

export const Primary = Template.bind({});
Primary.args = { children: 'Primary', variant: 'primary' };

export const OutlineBrand = Template.bind({});
OutlineBrand.args = { children: 'Outline Brand', variant: 'outline-brand' };

export const OutlinePrimary = Template.bind({});
OutlinePrimary.args = { children: 'Outline Primary', variant: 'outline-primary' };

export const Tertiary = Template.bind({});
Tertiary.args = { children: 'Tertiary', variant: 'tertiary' };

// Core Buttons (Inverse Pallete)
export const InverseBrand = Template.bind({});
InverseBrand.args = { children: 'Inverse Brand', variant: 'inverse-brand' };

export const InverseOutlineBrand = Template.bind({});
InverseOutlineBrand.args = { children: 'Inverse Outline Brand', variant: 'inverse-outline-brand' };

export const InversePrimary = Template.bind({});
InversePrimary.args = { children: 'Inverse Primary', variant: 'inverse-primary' };

export const InverseOutlinePrimary = Template.bind({});
InverseOutlinePrimary.args = { children: 'Inverse Outline Primary', variant: 'inverse-outline-primary' };

export const InverseTertiary = Template.bind({});
InverseTertiary.args = { children: 'Inverse Tertiary', variant: 'inverse-tertiary' };

// Utility Buttons
export const Success = Template.bind({});
Success.args = { children: 'Success', variant: 'success' };

export const Danger = Template.bind({});
Danger.args = { children: 'Danger', variant: 'danger' };

export const OutlineSuccess = Template.bind({});
OutlineSuccess.args = { children: 'Outline Success', variant: 'outline-success' };

export const OutlineDanger = Template.bind({});
OutlineDanger.args = { children: 'Outline Success', variant: 'outline-danger' };

export const Link = Template.bind({});
Link.args = { children: 'Link', variant: 'link' };

export const Light = Template.bind({});
Light.args = { children: 'Light', variant: 'light' };

export const Dark = Template.bind({});
Dark.args = { children: 'Dark', variant: 'dark' };

export const OutlineLight = Template.bind({});
OutlineLight.args = { children: 'Outline Light', variant: 'outline-light' };

export const OutlineDark = Template.bind({});
OutlineDark.args = { children: 'Outline Dark', variant: 'outline-dark' };
