import Button from '../index';

export default { title: 'Components/Button/Size', component: Button };

function Template(args) {
  return <Button {...args} />;
}

// Lg
export const LgPrimary = Template.bind({});
LgPrimary.args = { children: 'Large button', variant: 'primary', size: 'lg' };

export const LgOutlinePrimary = Template.bind({});
LgOutlinePrimary.args = { children: 'Large button', variant: 'outline-primary', size: 'lg' };

// Sm
export const SmPrimary = Template.bind({});
SmPrimary.args = { children: 'Small button', variant: 'primary', size: 'sm' };

export const SmOutlinePrimary = Template.bind({});
SmOutlinePrimary.args = { children: 'Small button', variant: 'outline-primary', size: 'sm' };

// Inline
export const InlineLink = Template.bind({});
InlineLink.args = { children: 'Inline button', variant: 'link', size: 'inline' };
