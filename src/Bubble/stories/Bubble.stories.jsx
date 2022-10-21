import Bubble from '../index';

export default {
  title: 'Components/Bubble/Variant',
  component: Bubble,
};

function Template(args) {
  return <Bubble {...args} />;
}

export const Primary = Template.bind({});
Primary.args = { children: '1', variant: 'primary' };

export const Success = Template.bind({});
Success.args = { children: '1', variant: 'success' };

export const Error = Template.bind({});
Error.args = { children: '1', variant: 'error' };

export const Warning = Template.bind({});
Warning.args = { children: '1', variant: 'warning' };

export const Disabled = Template.bind({});
Disabled.args = { children: '1', disabled: true };

export const Expandable = Template.bind({});
Expandable.args = { children: '1234', variant: 'error', expandable: true };
