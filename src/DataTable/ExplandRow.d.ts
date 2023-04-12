export interface ExpandRowProps {
    row: {
        isExpanded: boolean;
        getToggleRowExpandedProps: () => any;
    };
}

declare function ExpandRow(props: ExpandRowProps): JSX.Element;

export default ExpandRow;

