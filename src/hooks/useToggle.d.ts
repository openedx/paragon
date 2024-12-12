export type HandlersTypes = {
    handleToggleOn?: () => void;
    handleToggleOff?: () => void;
    handleToggle?: (isOn: boolean) => void;
};

export type UseToggleReturnTypes = [
    isOn: boolean,
    setOn: () => void,
    setOff: () => void,
    toggle: () => void
];

export default function useToggle(
    defaultIsOn?: boolean,
    handlers?: HandlersTypes
): UseToggleReturnTypes;
