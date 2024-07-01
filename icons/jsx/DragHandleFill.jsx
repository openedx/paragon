import * as React from "react";
const SvgDragHandleFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 -960 960 960"
    fill="none"
    {...props}
  >
    <path
      d="M160-390v-60h640v60H160Zm0-120v-60h640v60H160Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgDragHandleFill;
