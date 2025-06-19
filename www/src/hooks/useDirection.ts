export default function useDirection(
  settings: any,
  updateSettings: (keyOrUpdates: string | Record<string, any>, value?: any) => void,
) {
  const handleDirectionChange = (value: string) => {
    document.body.setAttribute('dir', value);
    updateSettings('direction', value);
  };

  return {
    handleDirectionChange,
  };
}
