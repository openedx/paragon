import Bubble from './index';

export default {
  title: 'Bubble',
  component: Bubble,
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
    },
  },
};

const Template = (args) => <Bubble {...args} />;

export const Primary = Template.bind({});
Primary.args = { children: 'Primary', variant: 'primary' };

export const Success = Template.bind({});
Success.args = { children: 'Success', variant: 'success' };

export const Error = Template.bind({});
Error.args = { children: 'Error', variant: 'error' };

export const Warning = Template.bind({});
Warning.args = { children: 'Warning', variant: 'warning' };
