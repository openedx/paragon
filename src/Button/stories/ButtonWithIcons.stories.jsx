import Button from '../index';
import {
  ArrowBack,
  ArrowDropDown,
  Remove,
  Add,
  Highlight,
} from '../../../icons';

export default { title: 'Components/Button/WithIcons', component: Button };

function Template(args) {
  return <Button {...args} />;
}

export const Brand = Template.bind({});
Brand.args = {
  children: 'Brand',
  variant: 'brand',
  iconBefore: ArrowBack,
};

export const OutlineBrand = Template.bind({});
OutlineBrand.args = {
  children: 'Outline Brand',
  variant: 'outline-brand',
  iconAfter: ArrowDropDown,
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
  variant: 'primary',
  iconBefore: Remove,
  iconAfter: Add,
};

export const OutlinePrimary = Template.bind({});
OutlinePrimary.args = {
  children: 'Outline Primary',
  variant: 'outline-primary',
  iconBefore: Highlight,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  children: 'Tertiary',
  variant: 'tertiary',
  iconAfter: Add,
};
