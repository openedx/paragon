/* eslint-disable import/no-cycle */
export { default as asInput } from './asInput';
export { default as Avatar } from './Avatar';
export { default as AvatarButton } from './AvatarButton';
export { default as Breadcrumb } from './Breadcrumb';
export { default as Button } from './Button';
export { default as CheckBox } from './CheckBox';
export { default as CheckBoxGroup } from './CheckBoxGroup';
export { default as Collapsible } from './Collapsible';
export { default as Dropdown } from './Dropdown';
export { default as Fieldset } from './Fieldset';
export { default as Hyperlink } from './Hyperlink';
export { default as Icon } from './Icon';
export { default as IconButton } from './IconButton';
export { default as Input } from './Input';
export { default as InputSelect } from './InputSelect';
export { default as InputText } from './InputText';
export { default as ListBox } from './ListBox';
export { default as ListBoxOption } from './ListBoxOption';
export { default as MailtoLink } from './MailtoLink';
export { default as Modal } from './Modal';
export { default as Pagination } from './Pagination'; // TODO: shim from react-bootstrap
export { default as RadioButtonGroup, RadioButton } from './RadioButtonGroup';
export {
  breakpoints,
  ExtraSmall,
  Small,
  Medium,
  Large,
  ExtraLarge,
  LargerThanExtraSmall,
} from './Responsive';
export { default as SearchField } from './SearchField';
export { default as StatefulButton } from './StatefulButton';
export { default as StatusAlert } from './StatusAlert';
export { default as Table } from './Table';
export { default as Tabs } from './Tabs';
export { default as TextArea } from './TextArea';
export { default as Toast } from './Toast';
export { default as ValidationFormGroup } from './ValidationFormGroup';
export { default as TransitionReplace } from './TransitionReplace';
export { default as ValidationMessage } from './ValidationMessage';
/*
  TODO: Decide if this table should be used instead of the current Paragon component
  export { default as Table } from 'react-bootstrap/Table';
*/
export { default as DataTable } from './DataTable';
export { default as TextFilter } from './DataTable/TextFilter';
export { default as TableHeaderCell } from './DataTable/TableHeaderCell';
export { default as TableCell } from './DataTable/TableCell';
export { default as TableFilters } from './DataTable/TableFilters';
export { default as TableHeader } from './DataTable/TableHeaderRow';
export { default as TableRow } from './DataTable/TableRow';
export { default as BulkActions } from './DataTable/BulkActions';
export { default as TableControlBar } from './DataTable/TableControlBar';

export { default as Variant } from './utils/constants';
export { default as useWindowSize } from './hooks/useWindowSize';

// Pass through components from react-bootstrap

/*
  TODO: Accordion
  - a11y defect: Trigger button doesn't show expanded/collapsed state. Issue logged some time ago.

export { default as Accordion } from 'react-bootstrap/Accordion';
export { default as AccordionContext } from 'react-bootstrap/AccordionContext';
export { default as AccordionCollapse } from 'react-bootstrap/AccordionCollapse';
export {
  default as AccordionToggle,
  useAccordionToggle,
} from 'react-bootstrap/AccordionToggle';

*/
export { default as Alert } from 'react-bootstrap/Alert';
export { default as Badge } from 'react-bootstrap/Badge';
/*
  TODO: Breadcrumb
  a11y defect: aria-current (needed semantics) is on the <li>, not on the <a>, which takes focus

export { default as Breadcrumb } from 'react-bootstrap/Breadcrumb';
export { default as BreadcrumbItem } from 'react-bootstrap/BreadcrumbItem';
*/
export { default as ButtonGroup } from 'react-bootstrap/ButtonGroup';
export { default as ButtonToolbar } from 'react-bootstrap/ButtonToolbar';
export { default as Card } from 'react-bootstrap/Card';
export { default as CardColumns } from 'react-bootstrap/CardColumns';
export { default as CardDeck } from 'react-bootstrap/CardDeck';
export { default as CardImg } from 'react-bootstrap/CardImg';
export { default as CardGroup } from 'react-bootstrap/CardGroup';
export { default as Carousel } from 'react-bootstrap/Carousel';
export { default as CarouselItem } from 'react-bootstrap/CarouselItem';
export { default as CloseButton } from 'react-bootstrap/CloseButton';
export { default as Col } from 'react-bootstrap/Col';
export { default as Collapse } from 'react-bootstrap/Collapse';
export { default as DropdownButton } from 'react-bootstrap/DropdownButton';
export { default as Fade } from 'react-bootstrap/Fade';
export { default as Form } from 'react-bootstrap/Form';
export { default as FormControl } from 'react-bootstrap/FormControl';
export { default as FormCheck } from 'react-bootstrap/FormCheck';
export { default as FormFile } from 'react-bootstrap/FormFile';
export { default as FormGroup } from 'react-bootstrap/FormGroup';
export { default as FormLabel } from 'react-bootstrap/FormLabel';
export { default as FormText } from 'react-bootstrap/FormText';
export { default as Container } from 'react-bootstrap/Container';
export { default as Image } from 'react-bootstrap/Image';
export { default as Figure } from 'react-bootstrap/Figure';
export { default as InputGroup } from 'react-bootstrap/InputGroup';
export { default as Media } from 'react-bootstrap/Media';
export { useTable } from 'react-table';
/*
  TODO: Modal
  a11y defects:
  - Doesn't do focus trapping within modal
  - Esc key should always dismiss the modal yet it seems to be optional
  - They have role="dialog" on the background tinted layer, which is an old hack from Bootstrap
  - They have role="document" on a child of the dialog div, which is an old hack to
    work around a NVDA bug.
  - Use of aria-modal (ARIA 1.1) attribute?

export { default as Modal } from 'react-bootstrap/Modal';
export { default as ModalBody } from 'react-bootstrap/ModalBody';
export { default as ModalDialog } from 'react-bootstrap/ModalDialog';
export { default as ModalFooter } from 'react-bootstrap/ModalFooter';
export { default as ModalTitle } from 'react-bootstrap/ModalTitle';
*/
export { default as Nav } from 'react-bootstrap/Nav';
export { default as Navbar } from 'react-bootstrap/Navbar';
export { default as NavbarBrand } from 'react-bootstrap/NavbarBrand';
export { default as NavDropdown } from 'react-bootstrap/NavDropdown';
export { default as NavItem } from 'react-bootstrap/NavItem';
export { default as NavLink } from 'react-bootstrap/NavLink';
export { default as Overlay } from 'react-bootstrap/Overlay';
export { default as OverlayTrigger } from 'react-bootstrap/OverlayTrigger';
export { default as PageItem } from 'react-bootstrap/PageItem';
// TODO: create shim – export { default as Pagination } from 'react-bootstrap/Pagination';
export { default as Popover } from 'react-bootstrap/Popover';
export { default as PopoverTitle } from 'react-bootstrap/PopoverTitle';
export { default as PopoverContent } from 'react-bootstrap/PopoverContent';
export { default as ProgressBar } from 'react-bootstrap/ProgressBar';
export { default as ResponsiveEmbed } from 'react-bootstrap/ResponsiveEmbed';
export { default as Row } from 'react-bootstrap/Row';
export { default as Spinner } from 'react-bootstrap/Spinner';
export { default as SplitButton } from 'react-bootstrap/SplitButton';
export { default as Tab } from 'react-bootstrap/Tab';
export { default as TabContainer } from 'react-bootstrap/TabContainer';
export { default as TabContent } from 'react-bootstrap/TabContent';
export { default as TabPane } from 'react-bootstrap/TabPane';
export { default as ToggleButton } from 'react-bootstrap/ToggleButton';
export { default as ToggleButtonGroup } from 'react-bootstrap/ToggleButtonGroup';
export { default as Tooltip } from 'react-bootstrap/Tooltip';
