import Button from './index';

export default { title: 'Button', component: Button };

const Template = (args) => <Button {...args} />;

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
