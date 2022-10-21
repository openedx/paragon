import Bubble from '../index';
import { Check } from '../../../icons';
import Icon from '../../Icon';

export default {
  title: 'Components/Bubble/WithIcon',
  component: Bubble,
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
    },
  },
};

function Template(args) {
  return (
    <Bubble {...args}>
      <Icon src={Check} />
    </Bubble>
  );
}

export const Primary = Template.bind({});
Primary.args = { variant: 'primary' };

export const Success = Template.bind({});
Success.args = { variant: 'success' };

export const Error = Template.bind({});
Error.args = { variant: 'error' };

export const Warning = Template.bind({});
Warning.args = { variant: 'warning' };

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };
