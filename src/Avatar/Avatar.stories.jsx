import Avatar from './index';

export default { title: 'Components/Avatar', component: Avatar };

const Template = (args) => <Avatar {...args} />;

export const Xs = Template.bind({});
Xs.args = { size: 'xs' };

export const Sm = Template.bind({});
Sm.args = { size: 'sm' };

export const Md = Template.bind({});
Md.args = { size: 'md' };

export const Lg = Template.bind({});
Lg.args = { size: 'lg' };

export const Xl = Template.bind({});
Xl.args = { size: 'xl' };

export const Xxl = Template.bind({});
Xxl.args = { size: 'xxl' };

export const Huge = Template.bind({});
Huge.args = { size: 'huge' };
