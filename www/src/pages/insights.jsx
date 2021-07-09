import React from 'react';
import {
  DataTable, Tabs, Tab, Container, Row, Col
} from '~paragon-react'; // eslint-disable-line
import SEO from '../components/SEO';
import Layout from '../components/PageLayout';
import dependentProjectsUsages from '../../../dependent-usage.json';

const timeSavingsFactor = {
  Icon: 2,
  Button: 1,
  InputText: 4,
  InputSelect: 4,
  TextArea: 4,
  StatusAlert: 4,
  Hyperlink: 1,
  Table: 4,
  Input: 4,
  ValidationFormGroup: 16,
  Modal: 32,
  CheckBox: 2,
  StatefulButton: 4,
  TransitionReplace: 4,
  "Form.Group": 4,
  "Form.Check": 2,
  Spinner: 2,
  "Form.Text": 1,
  Collapsible: 2,
  Alert: 4,
  Form: 1,
  "Form.Label": 1,
  "Form.Row": 1,
  "Form.Control": 8,
  "Alert.Link": 1,
  DataTable: 128,
  "DataTable.TableControlBar": 1,
  "DataTable.Table": 1,
  "DataTable.TableFooter": 1,
  "DataTable.RowStatus": 1,
  Container: 1,
  Stepper: 32,
  "Stepper.Header": 1,
  "Stepper.Step": 1,
  "Stepper.ActionRow": 1,
  AlertModal: 32,
  ActionRow: 1,
  MailtoLink: 1,
  "Form.Checkbox": 2,
  Card: 4,
  "Card.Body": 1,
  "Card.Text": 1,
  IconButton: 4,
  Row: 1,
  "DataTableContext.Provider": 1,
  IndeterminateCheckbox: 1,
  Pagination: 4,
  "Alert.Heading": 1,
  Dropdown: 8,
  "Dropdown.Toggle": 1,
  "Dropdown.Menu": 1,
  "Dropdown.Item": 1,
  Navbar: 1,
  Nav: 1,
  "Nav.Link": 1,
  OverlayTrigger: 1,
  Tooltip: 4,
  FormControl: 8,
  "FormControl.Feedback": 1,
  SearchField: 1,
  ModalDialog: 32,
  "ModalDialog.Body": 1,
  Col: 1,
  CardGrid: 1,
  "Card.Title": 1,
  Badge: 1,
  Toast: 64,
  SwitchControl: 2,
  "Collapsible.Advanced": 1,
  "Collapsible.Trigger": 1,
  "Collapsible.Visible": 1,
  "Collapsible.Body": 1,
  "Form.CheckboxSet": 2,
  CheckboxControl: 2,
  "Card.Subtitle": 1,
  FullscreenModal: 32,
  CardDeck: 4,
  Large: 1,
  Image: 1,
  ExtraLarge: 1,
  Tabs: 8,
  Tab: 1,
  Breadcrumb: 2,
  Popover: 16,
  "Popover.Title": 1,
  "Popover.Content": 1,
  "Card.Img": 1,
  "Card.Footer": 1,
  "Dropdown.Header": 1,
  "Dropdown.Divider": 1,
  "Dropdown.Deprecated": 1,
  CardView: 1,
  "ActionRow.Spacer": 1,
  ModalLayer: 32,
  "ModalDialog.Header": 1,
  "ModalDialog.Title": 1,
  "ModalDialog.Footer": 1,
  "ModalDialog.CloseButton": 1,
  DropdownButton: 1,
  Avatar: 2,
  AvatarButton: 4,
  "Tab.Container": 1,
  "Nav.Item": 1,
  "Tab.Content": 1,
  "Tab.Pane": 1,
  CheckBoxGroup: 1,
  Fieldset: 1
};

const dependentProjects = dependentProjectsUsages.map(dependentUsage => ({
  ...dependentUsage,
  count: dependentUsage.usages.length,
}));

const componentsUsage = dependentProjectsUsages.reduce((accumulator, project) => {
  Object.keys(project.usages).forEach(componentName => {
    if (!accumulator[componentName]) {
      accumulator[componentName] = {
        count: 0,
        timeSavings: 0,
        usages: [],
      };
    }
    accumulator[componentName].usages = accumulator[componentName].usages.concat({
      name: project.name,
      folderName: project.folderName,
      version: project.version,
      componentUsageCount: project.usages[componentName].length,
    });
    accumulator[componentName].count += project.usages[componentName].length;
    accumulator[componentName].timeSavings += project.usages[componentName].length * timeSavingsFactor[componentName];
  });
  return accumulator;
}, {});

const totalComponentUsageCount = Object.values(componentsUsage).reduce((acc, componentUsage) => {
  return acc + componentUsage.count;
}, 0);
const totalTimeSavings = Object.values(componentsUsage).reduce((acc, componentUsage) => {
  return acc + componentUsage.timeSavings;
}, 0);

// Paragon version in all projects
const ProjectsUsage = () => (
  <div className="pt-5 mb-5">
    <h3 className="mb-4">Projects in Open edX consuming Paragon</h3>
    <DataTable
      isSortable
      itemCount={dependentProjects.length}
      data={dependentProjects}
      columns={[
        { Header: 'Project Name', accessor: 'folderName' },
        { Header: 'Paragon Version', accessor: 'version' },
      ]}
    >
      <DataTable.TableControlBar />
      <DataTable.Table />
      <DataTable.EmptyTable content="No projects" />
      <DataTable.TableFooter />
    </DataTable>
  </div>
);

// Usage info about a single component
// eslint-disable-next-line
const ComponentUsage = ({ name, componentUsageInProjects, totalCount, timeSavings }) => (
  <div className="mb-5">
      <h3 className="flex-grow-1">{name}</h3>
      <p className="x-small">Estimated time saved: {timeSavings} hours. <span className="text-muted">({totalCount} instances &times; {timeSavingsFactor[name]} hr)</span></p>

    <DataTable
      isSortable
      itemCount={componentUsageInProjects.length} // eslint-disable-line
      data={componentUsageInProjects}
      columns={[
        { Header: 'Project Name', accessor: 'folderName' },
        { Header: 'Paragon Version', accessor: 'version' },
        { Header: 'Instance count', accessor: 'componentUsageCount' },
      ]}
    >
      <DataTable.Table />
      <DataTable.EmptyTable content="No usages" />
    </DataTable>
  </div>
);

// Usage info for all components
const ComponentsUsage = () => (
  <div className="pt-5 mb-5">
    {Object.keys(componentsUsage).sort().map(name => (
      <ComponentUsage
        key={name}
        name={name}
        totalCount={componentsUsage[name].count}
        timeSavings={componentsUsage[name].timeSavings}
        componentUsageInProjects={componentsUsage[name].usages}
      />
    ))}
  </div>
);

export default function InsightsPage() {
  return (
    <Layout>
      <Container size="md" className="py-5">
        <SEO title="Usage Insights" />
        <header className="mb-5">
          <h1>Usage Insights</h1>
          <p>Last updated: 7-9-2021</p>
        </header>
        <Tabs defaultActiveKey="projects" id="uncontrolled-tab-example">
          <Tab eventKey="projects" title="Projects">
            <ProjectsUsage />
          </Tab>
          <Tab eventKey="components" title="Components">
            <Row>
              <Col md="6">
                <p className="mt-4 small">In this snapshot of usage within Open edX repositories, {totalComponentUsageCount} components are in use, saving an estimated {totalTimeSavings} hours of engineering labor.</p>
              </Col>
            </Row>
            <ComponentsUsage />
          </Tab>
        </Tabs>
      </Container>
    </Layout>
  );
}
