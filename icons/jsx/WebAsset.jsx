import * as React from "react";
const SvgWebAsset = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M3 4v16h18V4H3zm16 14H5V8h14v10z" fill="currentColor" />
  </svg>
);
export default SvgWebAsset;
