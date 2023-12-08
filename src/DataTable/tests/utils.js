import { act } from 'react-dom/test-utils';
import {waitFor} from "@testing-library/react";

// eslint-disable-next-line import/prefer-default-export
export const waitForComponentToPaint = async (wrapper) => {
  await act(async () => {
    await new Promise(resolve => { setTimeout(resolve); });
    await waitFor(() => {
      wrapper.update();
    });
  });
};
