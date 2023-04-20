export interface WindowSizeTypes {
    width: number | undefined;
    height: number | undefined;
}

declare function useWindowSize(): WindowSizeTypes;

export default useWindowSize;
