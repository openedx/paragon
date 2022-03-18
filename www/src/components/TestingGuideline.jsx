import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import { Button, Collapsible, DataTable } from '~paragon-react';  // eslint-disable-line
import { Close, Check } from '~paragon-icons'; // eslint-disable-line

const TestingGuideline = ({
  title,
  href,
  setIsGuidelinesOnPage,
  defaultText,
  events,
  dataTestId,
  selectors,
}) => {
  const [collapseIsOpen, setCollapseIsOpen] = useState(false);
  setIsGuidelinesOnPage(true);

  const tableRow = {
    defaultText: <Markdown>{defaultText}</Markdown>,
    events: <Markdown>{events}</Markdown>,
    dataTestId: dataTestId ? <Check /> : <Close />,
    selectors: <Markdown>{selectors}</Markdown>,
  };

  return (
    <div className="mb-5 pgn-doc__guideline">
      <h3 className="mb-4 pgn-doc__heading" id="testing-guidelines">
        {title}
        <a href={`#${href}`}>
          <span className="pgn-doc__anchor">#</span>
        </a>
      </h3>
      <Collapsible.Advanced
        open={collapseIsOpen}
        onToggle={(isOpen) => setCollapseIsOpen(isOpen)}
      >
        <Collapsible.Trigger tag={Button} variant="link">
          <Collapsible.Visible whenClosed>Show guidelines</Collapsible.Visible>
          <Collapsible.Visible whenOpen>Hide guidelines</Collapsible.Visible>
        </Collapsible.Trigger>
        <Collapsible.Body className="mt-2">
          <DataTable
            data={[tableRow]}
            columns={[
              { Header: 'Default text', accessor: 'defaultText' },
              { Header: 'Events', accessor: 'events' },
              { Header: 'data-testid', accessor: 'dataTestId' },
              { Header: 'Selectors', accessor: 'selectors' },
            ]}
          >
            <DataTable.Table />
          </DataTable>
        </Collapsible.Body>
      </Collapsible.Advanced>
    </div>
  );
};

TestingGuideline.propTypes = {
  title: PropTypes.string.isRequired,
  setIsGuidelinesOnPage: PropTypes.func.isRequired,
  href: PropTypes.string,
  defaultText: PropTypes.node,
  events: PropTypes.node,
  dataTestId: PropTypes.bool,
  selectors: PropTypes.node,
};

TestingGuideline.defaultProps = {
  href: undefined,
  defaultText: 'No default text',
  events: 'No events',
  dataTestId: undefined,
  selectors: 'No selectors',
};

export default TestingGuideline;
