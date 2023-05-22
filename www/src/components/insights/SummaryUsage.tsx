import React, { useContext } from 'react';
import {
  DataTable,
  TextFilter,
  CheckboxFilter,
  useMediaQuery,
  breakpoints,
} from '~paragon-react';
import componentsUsage from '../../utils/componentsUsage';
import InsightsContext from '../../context/InsightsContext';
import SummaryUsageExamples, { ISummaryUsageExamples } from './SummaryUsageExamples';
import { IComponentUsageData, IInsightsContext } from '../../types/types';
import getDependentProjectsUsages from '../../utils/getDependentProjectsUsages';

interface IFilterData {
  name: string,
  number: number | undefined,
  value: string
}

const round = (n: number) => Math.round(n * 10) / 10;

const ICON_TYPE = 'Icon';
const TABLE_PAGE_SIZE = 10;
const componentsInUsage = Object.keys(componentsUsage);
const dependentProjects = getDependentProjectsUsages();

function SummaryUsage() {
  const { paragonTypes = {}, isParagonIcon = () => false } = useContext(InsightsContext) as IInsightsContext;
  const isMedium = useMediaQuery({ minWidth: breakpoints.large.minWidth });

  const typeCount = Object.keys(paragonTypes)
    .reduce((accumulator: { [key: string]: number | undefined }, componentName) => {
      const type = paragonTypes[componentName] || (isParagonIcon(componentName) && ICON_TYPE);
      if (componentsInUsage.includes(componentName)) {
        accumulator[type] = (accumulator[type] || 0) + 1;
      }
      return accumulator;
    }, {});

  const filterValues: IFilterData[] = Object.keys(paragonTypes)
    .map((key) => paragonTypes[key])
    .filter((v, i, a) => a.indexOf(v) === i)
    .map(type => ({ name: type, number: typeCount[type], value: type }));
  // Number of Icons is calculated in the statement below. Initialized as `undefined` to not display '0'.
  const iconsType: IFilterData = { name: ICON_TYPE, number: undefined, value: ICON_TYPE };

  const summaryComponentsUsage = Object.entries<IComponentUsageData[]>(componentsUsage).map(
    ([componentName, usages]) => {
      const componentUsageCounts = usages
        .reduce((accumulator, project) => accumulator + project.componentUsageCount, 0);
      let type = paragonTypes[componentName];
      if (!type && isParagonIcon(componentName)) {
        type = ICON_TYPE;
        iconsType.number = (iconsType.number || 0) + 1;
      }
      return {
        name: componentName,
        count: componentUsageCounts,
        usages: componentsUsage[componentName],
        type,
      };
    },
  );
  filterValues.push(iconsType);
  typeCount[ICON_TYPE] = iconsType.number;

  const summaryTableData = summaryComponentsUsage.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    return nameA < nameB ? -1 : 1;
  });

  const averageComponentsUsedPerProject = dependentProjects
    .reduce((accumulator, project) => accumulator + project.count, 0) / dependentProjects.length;
  return (
    <div className="pt-5 mb-5">
      <div className="mb-5">
        <h2>Overview</h2>
        <p>
          Paragon is used by at least <strong>{dependentProjects.length} projects</strong>, with an average
          of <strong>{round(averageComponentsUsedPerProject)} imports</strong> per project.
        </p>
      </div>
      <h3>Overall usage</h3>
      <DataTable
        isPaginated
        isExpandable
        isSortable
        showFiltersInSidebar={isMedium}
        isFilterable
        defaultColumnValues={{ Filter: TextFilter }}
        itemCount={summaryTableData.length}
        data={summaryTableData}
        renderRowSubComponent={({ row }: ISummaryUsageExamples) => <SummaryUsageExamples row={row} />}
        initialState={{ pageSize: TABLE_PAGE_SIZE }}
        columns={[
          {
            id: 'expander',
            Header: DataTable.ExpandAll,
            Cell: DataTable.ExpandRow,
          },
          {
            Header: 'Component Name',
            accessor: 'name',
          },
          {
            Header: 'Instance Count',
            accessor: 'count',
            disableFilters: true,
          },
          {
            Header: 'Type',
            accessor: 'type',
            Filter: CheckboxFilter,
            filter: 'includesValue',
            filterChoices: filterValues,
          },
        ]}
      >
        <DataTable.TableControlBar />
        <DataTable.Table />
        <DataTable.EmptyTable content="No summary available" />
        <DataTable.TableFooter />
      </DataTable>
    </div>
  );
}

export default SummaryUsage;
