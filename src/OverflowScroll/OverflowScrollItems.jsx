import PropTypes from 'prop-types';
import { useOverflowScrollItems } from './data';

function OverflowScrollItems({ children }) {
  const overflowScrollChildren = useOverflowScrollItems(children);
  return overflowScrollChildren;
}

OverflowScrollItems.propTypes = {
  children: PropTypes.node.isRequired,
};

export default OverflowScrollItems;
