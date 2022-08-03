import Badge from './index';
import '../../www/public/static/edxorg-theme.css';

export default {
  title: 'Badge',
  component: Badge,
};

const Template = (args) => <Badge {...args}>Success</Badge>;
export const BadgeExample = Template.bind({});
BadgeExample.args = {
  as: 'span',
  variant: 'primary',
  bsPrefix: 'badge',
  pill: false,
};
