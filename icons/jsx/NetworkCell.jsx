import * as React from "react";
const SvgNetworkCell = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M2 22h20V2L2 22zm18-2h-3V9.83l3-3V20z" fill="currentColor" />
  </svg>
);
export default SvgNetworkCell;
