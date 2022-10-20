import Badge from './index';

import '../../www/public/static/edxorg-theme.css';

export default { title: 'Components/Badge', component: Badge };

const Template = (args) => <Badge {...args} />;

export const Primary = Template.bind({});
Primary.args = { children: 'Primary', variant: 'primary' };

export const Secondary = Template.bind({});
Secondary.args = { children: 'Secondary', variant: 'secondary' };

export const Success = Template.bind({});
Success.args = { children: 'Success', variant: 'success' };

export const Danger = Template.bind({});
Danger.args = { children: 'Danger', variant: 'danger' };

export const Warning = Template.bind({});
Warning.args = { children: 'Warning', variant: 'warning' };

export const Info = Template.bind({});
Info.args = { children: 'Info', variant: 'info' };

export const Light = Template.bind({});
Light.args = { children: 'Light', variant: 'light' };

export const Dark = Template.bind({});
Dark.args = { children: 'Dark', variant: 'dark' };
